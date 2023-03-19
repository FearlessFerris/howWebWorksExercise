// What is HTTP?

// Hyper Text Transfer Protocol is a system of getting data from or to a server



// What is a URL?

// URL is a Uniform Resource Locator, which is an address for internet resources



// What is DNS?

// DNS is a Domain Name System, this system takes (human-readable) URL's and converts these into IP addresses



// What is a query string?

// A query string will allow you to pass in key-value pairs into the URL, using the format ?key1=value1&key2=value2



// List two HTTP Verbs and thier use cases

// PUT - this will update an entity and requires the (id) in both the request header and body (the two must match)

// POST - send some data to the server (pages that change data on the server)



// What is an HTTP request?

// A request that uses HTTP protocols to request data to a client from a server



// What is an HTTP response? 

// A response that uses HTTP protocols to send data from a server to a client



// What is an HTTP header? Give a couple of examples of request and response headers

// Headers will provide additional information about the request and response

// Request Headers: Accept-Encoding, Accept-Language, If-Match, Range

// Response Headers: Content-Type, Last-Modified, Set-Coolie, Cache-Control



// What happens when you type a URL in a browser?

// 1.) Your browser 'resolves' the name into an IP address using DNS

// 2.) Your browswe makes a request to that IP address, including headers (info about browser, any previous cookies, and other things)

// 3.) The server sends a response (typically, HTML, with a status code 200 if it was sucessful)

// 4.) The browser makes a DOM from that HTML, and finds any other resources needed (images, CSS, JavaScript, etc)

// 5.) The browser makes seperate HTTP requests for those resources and recieves a response from the server for each



