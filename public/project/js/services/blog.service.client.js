(function () {
    angular
        .module("WebAppMaker")
        .factory("BlogService", blogService);

    function blogService($http) {
        var api = {
            "createBlog": createBlog,
            "deleteBlog": deleteBlog,
            "findAllBlogs": findAllBlogs,
            "updateBlog": updateBlog,
            "findBlog": findBlog
        };

        return api;

        function createBlog(blog) {
            return $http.post('/api/blog', blog);
        }

        function deleteBlog(pid) {
            return $http.delete('/api/blog/'+pid);
        }

        function updateBlog(pid, blog) {
            return $http.put('/api/blog/'+pid, blog);
        }

        function findAllBlogs() {
            return $http.get('/api/blog');
        }

        function findBlog(pid) {
            return $http.get('/api/blog/'+pid);
        }
    }

})();