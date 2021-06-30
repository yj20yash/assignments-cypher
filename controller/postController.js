const axios = require("axios");

exports.getPosts = async (req, res) => {
    await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((data) => {
            return res.status(200).send(data.data);
        })
        .catch((error) => {
            console.error("Error reteriving posts", error);
            return res.status(500).send("Error reteriving posts");
        });
};

exports.getComments = async (req, res) => {
    let arr = [];
    await axios
        .get("http://localhost:7000/getPosts")
        .then((data) => {
            console.log(data.data[0].id);
            for (k in data.data) {
                axios
                    .get(
                        `https://jsonplaceholder.typicode.com/posts/${data.data[k].id}/comments`
                    )
                    .then((comments) => {
                        console.log(comments);
                    })
                    .catch((err) => {
                        console.error(err);
                        return res.status(500).send(err);
                    });
            }
            console.log(arr);
            return res.status(200).send(arr);
        })
        .catch((error) => {
            console.error("Error reteriving comments", error);
            return res.status(500).send("Error reteriving posts");
        });
};
