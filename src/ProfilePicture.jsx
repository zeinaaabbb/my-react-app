function ProfilePicture(){
  const imageUrl =  './src/assets/profile.jpg';
  //will make image disappear once clicked
  const handleClick = (e) => e.target.style.display ="none";

  return(<img onClick={(e) => handleClick(e)} src={imageUrl}></img>);
}

export default ProfilePicture
