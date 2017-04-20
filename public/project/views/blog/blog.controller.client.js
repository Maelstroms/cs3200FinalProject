(function() {
    angular
        .module("WebAppMaker")
        .controller("BlogListController", BlogListController)
        .controller("BlogEditController", BlogEditController);

    function BlogListController(BlogService) {
        var vm = this;
        vm.createBlog = createBlog;
        vm.deleteBlog = deleteBlog;

        function init() {
            var promise = BlogService.findAllBlogs();
            promise.then(function(res) {
                vm.blogs = res.data;
            });
        }
        init();

        function createBlog(blog) {
            var promise = BlogService.createBlog(blog);
            promise.then(function(_) {
                init()
            });
        }


        function deleteBlog(pid) {
            var promise = BlogService.deleteBlog(pid);
            promise.then(function(_) {
                init()
            });
        }
    }

    function BlogEditController(BlogService, $routeParams) {
        var vm = this;
        vm.blogId = $routeParams["pid"];

        vm.updateBlog = updateBlog;
        vm.findBlog = findBlog;

        function init() {
            findBlog(vm.blogId);
        }
        init();

        function updateBlog(blog) {
            var promise = BlogService.updateBlog(blog._id, blog);
            promise.then(function(_) {
                alert("blog has been updated");
            });
        }

        function findBlog(pid) {
            var promise = BlogService.findBlog(pid);
            promise.then(function(result) {
                console.log(result.data);
                vm.blog = result.data;
            });
        }
    }
})();
