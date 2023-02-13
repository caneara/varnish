export default class Vapor
{
    /**
     * Retrieve a signed storage link to upload with.
     *
     */
    static async requestSignedUrl(file, options = {})
    {
        return JSON.parse(await function() {
            return new Promise(function(resolve) {
                let request = new XMLHttpRequest();

                request.open('POST', '/vapor/signed-storage-url');
                request.onload = () => resolve(request.response);

                request.setRequestHeader('Content-Type', 'application/json');
                request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                request.setRequestHeader('X-CSRF-TOKEN', window.app.config.globalProperties.$page.props.csrf);

                request.send(JSON.stringify({
                    bucket       : options.bucket || '',
                    content_type : options.contentType || file.type,
                    expires      : options.expires || '',
                    visibility   : options.visibility || 'public-read',
                }));
            });
        }());
    }

    /**
     * Send the given file using the given signed storage url.
     *
     */
    static async sendFile(url, file, options = {}, headers = {})
    {
        return await function() {
            return new Promise(function(resolve) {
                let request = new XMLHttpRequest();

                request.open('PUT', url);
                request.onload = () => resolve(request.response);

                if (options.progress) {
                    request.upload.onprogress = (e) => options.progress(
                        Math.ceil((e.loaded / e.total) * 100)
                    );
                }

                for (const header in headers) {
                    request.setRequestHeader(header, headers[header]);
                }

                request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                request.setRequestHeader('Content-Type', options.contentType || file.type);
                request.setRequestHeader('X-CSRF-TOKEN', window.app.config.globalProperties.$page.props.csrf);

                request.send(file);
            });
        }();
    }

    /**
     * Store a file in S3 and return its UUID, key, and other information.
     *
     */
    static async store(file, options = {})
    {
        let response = await this.requestSignedUrl(file, options);

        if ('Host' in response.headers) delete response.headers['Host'];
        if ('Content-Type' in response.headers) delete response.headers['Content-Type'];

        await this.sendFile(response.url, file, options, response.headers);

        if (file.name) response.extension = file.name.split('.').pop();

        return response;
    }
}