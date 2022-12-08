// Webpage for creating a post to sell an item on tradeNC website

// Import functions, docs, and packages
import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { storage } from "../firebase-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

// Initiate the create post webpage
const CreatePost = ({ isAuth }) => {
  // Set up title, post text, item price, contact info, image, school name features
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [imgRef, setImgRef] = useState("");
  const [schoolName, setSchoolName] = useState("");

  // Upload image function
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      getDownloadURL(imageRef).then((url) => {
        setImgRef(url);
      });
      alert("upload successful");
    });
  };

  let navigate = useNavigate();

  // Check whether fill all of the forms/blanks, otherwise send an alert
  const postsCollectionRef = collection(db, "posts");
  const createPost = async () => {
    if (title === "" || postText === "" || itemPrice === "" || contactInfo === "" || imgRef === "") {
      window.alert("Sorry! You must fill out all the blanks and upload a picture of your item!");
      return;
    }

    // Add new item doc to database
    const d = new Date();
    const myPostTime = d.toLocaleDateString();
    console.log(myPostTime);
    await addDoc(postsCollectionRef, {
      title,
      postText,
      itemPrice,
      contactInfo,
      imgRef,
      schoolName,
      myPostTime,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/App/login");
    }
  }, []);

  // Initialize create post UI
  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Post Your Items</h1>
        <div className="inputGp">
          <label>Item Name</label>
          <input
            placeholder="What do you want to sell?"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>Item Description</label>
          <textarea
            placeholder="Add description..."
            maxLength="1000"
            onChange={(e) => {
              setPostText(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="inputGp">
            <label>Price</label>
            <input
              placeholder="Price...($)"
              onChange={(e) => {
                setItemPrice(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <div className="inputGp">
            <label>Contact Information</label>
            <input
              placeholder="Enter your email or phone"
              onChange={(e) => {
                setContactInfo(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="inputGp">
          <label>Upload item image</label>
          <input
            type="file"
            onChange={(e) => {
              setImageUpload(e.target.files[0]);
            }}
          />
        </div>
        <button className="uploadButton" onClick={uploadImage}> Upload Image </button>
        <div className="inputSchool">
          <label className="selectSchoolLabel">Select a university/college</label>
          <select className="selectSchool" onChange={(e) => {
            setSchoolName(e.target.value)
          }}>
            <option></option>
            <option value="UNC - Chapel Hill">UNC - Chapel Hill</option>
            <option value="Duke">Duke</option>
            <option value="NCSU">NCSU</option>
            <option value="NCCU">NCCU</option>
          </select>
        </div>
      </div>
      <button className="submitButton" onClick={createPost}>Submit Post</button>
    </div>
  );
};

export default CreatePost;
