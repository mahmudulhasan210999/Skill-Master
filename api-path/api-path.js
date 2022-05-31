var host = "https://platform.bitflex.xyz";
// var authorization = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyNjg1MzA3LCJqdGkiOiJhNmYwYjJlNWEwNWY0NjBkYjc2YjUzOWQ0NmI0MjM3MyIsInVzZXJfaWQiOjQxMn0.vxVGyFEO1PYYyzm1VD4IxRgQfOuMXrHFXjRl0fwUlpA';

const V1API = {
    'get_blogs':host+'/api/blog?count=12&page=',
    'get_blog_details' :host+'/api/blog/details/'
}

export default V1API;