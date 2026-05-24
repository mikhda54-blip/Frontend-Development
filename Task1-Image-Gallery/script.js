body {
    text-align: center;
    font-family: Arial;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
}

.gallery img {
    width: 250px;
    height: 180px;
    object-fit: cover;
    cursor: pointer;
    transition: 0.3s;
}

.gallery img:hover {
    transform: scale(1.1);
}

#lightbox {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
}

#lightbox img {
    width: 70%;
    margin-top: 50px;
}

#lightbox span {
    color: white;
    font-size: 30px;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 40px;
}