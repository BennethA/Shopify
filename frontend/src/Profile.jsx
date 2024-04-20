const Profile = (props) => {
  return (
    <div className="profile">
      <h2>Account Profile</h2>
      <div className="details">
        <div>Name: Benneth</div>
        <div>Email: example@email.com</div>
        
      </div>
      <div className="logOut">
        <div onClick={props.handleLogOut}>
          Log Out
        </div>
      </div>
    </div>
  )
}

export default Profile