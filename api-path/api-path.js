var host = "http://api.skillmaster.academy";
// var authorization = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyNjg1MzA3LCJqdGkiOiJhNmYwYjJlNWEwNWY0NjBkYjc2YjUzOWQ0NmI0MjM3MyIsInVzZXJfaWQiOjQxMn0.vxVGyFEO1PYYyzm1VD4IxRgQfOuMXrHFXjRl0fwUlpA';

const V1API = {
    'get_blogs': host+'/api/blog?count=12&page=',
    'get_blog_details': host+'/api/blog/details/',
    'get_categories': host+'/api/blog/category',
    'get_recent_blogs': host+'/api/recent-blog',
    'blog_by_category': host+'/api/blog/by-category/',
    'get_category': host+'/api/course/category',
    'get_courses': host+'/api/courses',
    'featured_courses': host+'/api/featured-courses',
    'course_details': host+'/api/courses/',
    'course_by_category': host+'/api/courses/by-category/',
    'course_by_sub_category': host+'/api/courses/by-sub-category/',
    'instructor_by_course_id': host+'/api/course/instructor/',
    'get_register': host+'/api/register',
    'user_login': host+'/api/token',
    'place_order': host+'/api/courses/place/order'
}

export default V1API;