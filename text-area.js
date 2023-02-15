// document.getElementById('bold').addEventListener('click', function(){
//     document.getElementById('text-area').classList.toggle("bold")
// //     const inputValue = textInputArea('text-area');      
// //    inputValue.style.fontWeight = 'bold'    
// })
document.getElementById('bold').addEventListener('click',(e)=>{    
    const text = document.getElementById('text-area');

    if(text.style.fontWeight === "bold"){
        text.style.fontWeight = "normal";
    }else{
        text.style.fontWeight = "bold";
    }
});

document.getElementById('italic').addEventListener('click', function(){
    const inputValue = textInputArea('text-area');
   inputValue.style.fontStyle = 'italic'    
})

document.getElementById('underline').addEventListener('click', function(){
    const inputValue = textInputArea('text-area');
   inputValue.style.textDecoration = 'underline'    
})

document.getElementById('center-align').addEventListener('click', function(){
    const inputValue = textInputArea('text-area');
   inputValue.style.textAlign = 'center'    
})

document.getElementById('right-align').addEventListener('click', function(){
    const inputValue = textInputArea('text-area');
   inputValue.style.textAlign = 'right'    
})

document.getElementById('left-align').addEventListener('click', function(){
    const inputValue = textInputArea('text-area');
   inputValue.style.textAlign = 'left'    
})
document.getElementById('text-transform').addEventListener('click', function(){
    const inputValue = textInputArea('text-area');
   inputValue.style.textTransform = 'upperCase'    
})
document.getElementById('text-lowercase').addEventListener('click', function(){
    const inputValue = textInputArea('text-area');
   inputValue.style.textTransform = 'lowerCase'    
})
document.getElementById('font-size-change').addEventListener('change', function(e){
    let inputValue = e.target.value;      
    document.getElementById('text-area').style.fontSize = inputValue+'px';
})
document.getElementById('color').addEventListener('change',function(e){
    let inputValue = e.target.value;      
    document.getElementById('text-area').style.color = inputValue;
})
