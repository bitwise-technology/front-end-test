import React from 'react'
import Profile from './styled'

const ProfileDate = ({ data, status, error, isFetching }) => {
    return (
      <Profile>
        <div className="profile">
          <img src={data?.avatarUrl} alt="" />
        </div>
  
        <div className="date">
          <h3>{data?.name}</h3>
          <div className="repositories">
              <span>{data?.repositories.repositoryCount}</span>
              <p>Repositories</p>
          </div>
        </div>
      </Profile>
    )
}

export default ProfileDate
