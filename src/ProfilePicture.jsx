function ProfilePicture(){
  const imageUrl =  './src/assets/profile.jpg';

  const handleClick = (e) => console.log('clicked');

  return(<img onClick={handleClick} src={imageUrl}></img>);
}

export default ProfilePicture
