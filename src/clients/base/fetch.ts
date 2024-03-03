const METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
};

type Options = {
    method: string;
    data?: any;
    timeout?: number;
    headers?: object;
};

// Тип Omit принимает два аргумента: первый — тип, второй — строка
// и удаляет из первого типа ключ, переданный вторым аргументом
type OptionsWithoutMethod = Omit<Options, 'method'>;
// Этот тип эквивалентен следующему:
// type OptionsWithoutMethod = { data?: any };
function queryStringify(data) {
    let result = '';
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            if (result !== '') {
                result += '&';
            }
            result += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
        }
    }
    return result.length ? '?' + result : '';
}

class HTTPTransport {
    get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        console.log("Вызван get c options", options)
        return this.request(url, {...options, method: METHOD.GET}, options.timeout);
    };

    post(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        console.log("Вызван post c options", options)
        return this.request(url, {...options, method: METHOD.POST}, options.timeout);
    };

    put(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        console.log("Вызван put c options", options)
        return this.request(url, {...options, method: METHOD.PUT}, options.timeout);
    };

    delete(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        console.log("Вызван delete c options", options)
        return this.request(url, {...options, method: METHOD.DELETE}, options.timeout);
    };
    // PUT, POST, DELETE

    // options:
    // headers — obj
    // data — obj
    request(url: string, options: Options = { method: METHOD.GET }, timeout = 5000): Promise<XMLHttpRequest> {
        console.log("Вызван request")
        const {method, data} = options;
        const headers = options.headers || {};
        console.log("Вызван header", headers);
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            if(method === METHOD.GET){
                xhr.open(method, url + queryStringify(data));
            } else {
                xhr.open(method, url );
            }

            for (let key in headers) {
                if(headers.hasOwnProperty(key)) {
                    console.log("Устанавливается хедер");
                    xhr.setRequestHeader(key, headers[key]);
                }
            };

            xhr.onload = function() {
                console.log("Headers", xhr.getAllResponseHeaders());
                console.log("Получен ответ", xhr)
                console.log(data)
                resolve(xhr);
                return xhr;
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;
            xhr.timeout = timeout;

            if (method === METHOD.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }

        });
    };
}
// new HTTPTransport().get('http://localhost:8000/', {timeout: 3000, data: {"param1": "param2", "param3": "param5"}, headers: {"header1": "param1"}});
// new HTTPTransport().post('http://localhost:8000/', {timeout: 3000, data: {"param1": "param2", "param3": "param5"}, headers: {"header1": "param1"}});
// new HTTPTransport().put('http://localhost:8000/', {timeout: 3000, data: {"param1": "param2", "param3": "param5"}, headers: {"header1": "param1"}});
// new HTTPTransport().delete('http://localhost:8000/', {timeout: 3000, data: {"param1": "param2", "param3": "param5"}, headers: {"header1": "param1"}});
