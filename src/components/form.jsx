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
    
  
    </InfoContainer>
    </CardWrapper>
  </div>
  </div>
  ReactDOM.createRoot(document.getElementById("root")).render(product);

}


