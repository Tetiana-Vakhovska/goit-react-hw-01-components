 export const soshForm=()=>{
    return <div class="profile">
    <div class="description">
     
      <img src={"https://cdn-icons-png.flaticon.com/512/1077/1077012.png"} 
      alt="User avatar" width="640" />
        
    

<CardWrapper>
      <p>{$name}</p>
      <InfoContainer>
      <p >{$tag}</p>
      <p>{$location}</p>
    
  
    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">1000</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">2000</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">3000</span>
      </li>
    </ul>
    </InfoContainer>
    </CardWrapper>
  </div>
  </div>
}



Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }).isRequired,
};