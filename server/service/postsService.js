const postsData = require('../data/postsData');

exports.getPosts = function(){
  return postsData.getPosts();
};

exports.getPosts = function (id){
  return postsData.getPosts(id);
};

exports.savePost = function (post){
  return postsData.savePost(post);
};

exports.deletePost = function (id){
  return postsData.deletePost(id);
};

exports.updatePost = function (id,post){
  return postsData.updatePost(id, post);
};
