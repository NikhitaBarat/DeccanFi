// SPDX-License-Identifier: UNLICENESNSED
pragma solidity ^0.8.0;


contract DePosts {
    address public owner;
    uint256 private counter;

    constructor() {
        counter = 0;
        owner = msg.sender;
    }

    struct post {
        address poster;
        uint256 id;
        string textPost;
        string imgPost;
        string nftName;
    }

    event postCreated (
        address poster,
        uint id,
        string textPost,
        string imgPost,
        string nftName
    );

    mapping(uint256 => post) Posts;
    
    function createPost ( 
        string memory textPost, 
        string memory imgPost,
        string memory nftName  
        ) public payable {
        require(msg.value == (1 ether), "Please submit 1 Matic");
        post storage newPost = Posts[counter];
        newPost.textPost = textPost;
        newPost.imgPost = imgPost;
        newPost.nftName = nftName;

        newPost.poster = msg.sender;
        newPost.id = counter;

        emit postCreated (
            msg.sender,
            counter,
            textPost,
            imgPost,
            nftName
        );
        counter++;

        payable(owner).transfer(msg.value);
    }

    function getPost(uint id) public view returns (string memory, string memory, string memory,address){
        require(id < counter, "No such Tweet");

        post storage pst = Posts[id];
        return (pst.textPost, pst.imgPost, pst.nftName, pst.poster);
    }

}