let right = document.querySelector('div')
right.addEventListener('onkeydown',change)
let righti1 = document.getElementById('inp4')
let lefti1 = document.getElementById('inp1')
let centeri1 = document.getElementById('inp3')
let righti2 = document.getElementById('inp5')
let lefti2 = document.getElementById('inp2')
let start = document.querySelector('button')
start.addEventListener('click',startgame1)
let array1 =[0,0,0,0,0]
let array2=[0,0,0,0,0]
let array3=[0,0,0,0,0]
let array4=[0,0,0,0,0]
let array5=[0,0,1,0,0]
let sp
change()
function startgame1()
{
  m=0
  r=1
  let speed = document.getElementById('dropdown').value
  console.log(speed)
  if(speed==="Easy")
  {
    sp=1500
  }
  else if(speed==="Medium")
  sp=1000
  else
  sp=700
  setTimeout(()=> {
    document.getElementById('out13').innerHTML="3"
 },1000);
 setTimeout(()=> {
  document.getElementById('out13').innerHTML="2"
},2000);
  setTimeout(()=> {
  document.getElementById('out13').innerHTML="1"
},3000);
  setTimeout(()=> {
    document.getElementById('out13').innerHTML=' '
  startgame();
},4000);
}
let i
function startgame()
{
  if(m!==1)
  {
    i=Math.floor(Math.random()*5)
    console.log(i)
    
    if(i==0)
    array1=[1,0,0,0,0]
    else if(i==1)
    array1=[0,1,0,0,0]
    else if(i==2)
    array1=[0,0,1,0,0]
    else if(i==3)
    array1=[0,0,0,1,0]
    else if(i==4)
    array1=[0,0,0,0,1]
    change2()
    setTimeout(()=> {
      
   }
   ,1000);
    setTimeout(()=> {
        array2=array1;
        r++
        change3()
        array1=[0,0,0,0,0]
        change()
        console.log("Array1 "+array1+"Array2 "+array2)
        document.getElementById('top1').innerHTML="Score : "+r
        startgame()
     }
     ,sp);
     setTimeout(()=> {
        array3=array2;
        change4()
     }
     ,sp+sp);
     setTimeout(()=> {
        array4=array3;
        change5()
     }
     ,sp+sp+sp);
     setTimeout(()=> {
      checkresult()
   }
   ,sp+sp+sp);
  }
   
}
let m=0
function checkresult()
{
    if(array5[0]==array4[0])
    if(array5[1]==array4[1])
    if(array5[2]==array4[2])
    if(array5[3]==array4[3])
    if(array5[4]==array4[4])
    {
    m=1
    document.getElementById('out13').innerHTML="Game Over"
    array1 =[0,0,0,0,0]
    array2=[0,0,0,0,0]
    array3=[0,0,0,0,0]
    array4=[0,0,0,0,0]
    array5=[0,0,1,0,0]
    change()
    change2()
    change3()
    change4()
    change5()
    }
    else
    m=0

}

function change2()
{
  if(array1[0]==1)
  {
  document.getElementById('out1').style.backgroundImage="url('Car bg1.png')"
  document.getElementById('out1').style.backgroundSize="40px 40px"
  document.getElementById('out1').style.backgroundColor="transparent"
  }
  else
  {
    document.getElementById('out1').style.backgroundImage="none"
  document.getElementById('out1').style.backgroundColor='transparent'
  }
  if(array1[1]==1)
  {
    document.getElementById('out2').style.backgroundImage="url('Car bg1.png')"
    document.getElementById('out2').style.backgroundSize="40px 40px"
    document.getElementById('out2').style.backgroundColor="transparent"
  }
  else
  {
    document.getElementById('out2').style.backgroundImage="none"
  document.getElementById('out2').style.backgroundColor='transparent'
  
  }
  if(array1[2]==1)
  {
  document.getElementById('out3').style.backgroundImage="url('Car bg1.png')"
  document.getElementById('out3').style.backgroundSize="40px 40px"
  document.getElementById('out3').style.backgroundColor="transparent"
  }
  else
  {
    document.getElementById('out3').style.backgroundImage="none"
  document.getElementById('out3').style.backgroundColor='transparent'
  }
  if(array1[3]==1)
  {
  document.getElementById('out4').style.backgroundImage="url('Car bg1.png')"
  document.getElementById('out4').style.backgroundSize="40px 40px"
  document.getElementById('out4').style.backgroundColor="transparent"
  }
  else
  {
    document.getElementById('out4').style.backgroundImage="none"
  document.getElementById('out4').style.backgroundColor='transparent'
  }
  if(array1[4]==1)
  {
  document.getElementById('out5').style.backgroundImage="url('Car bg1.png')"
  document.getElementById('out5').style.backgroundSize="40px 40px"
  document.getElementById('out5').style.backgroundColor="transparent"
  }
  else
  {
    document.getElementById('out5').style.backgroundImage="none"
  document.getElementById('out5').style.backgroundColor='transparent'
  }
}
function change3()
{
  if(array2[0]==1)
  {
  document.getElementById('out6').style.backgroundImage="url('Car bg1.png')"
  document.getElementById('out6').style.backgroundSize="40px 40px"
  document.getElementById('out6').style.backgroundColor="transparent"
  }
  else
  {
  document.getElementById('out6').style.backgroundImage="none"
  document.getElementById('out6').style.backgroundColor='transparent'
  }
  if(array2[1]==1)
  {
    document.getElementById('out7').style.backgroundImage="url('Car bg1.png')"
    document.getElementById('out7').style.backgroundSize="40px 40px"
    document.getElementById('out7').style.backgroundColor="transparent"
  }
  else
  {
  document.getElementById('out7').style.backgroundImage="none"
  document.getElementById('out7').style.backgroundColor='transparent'
  
  }
  if(array2[2]==1)
  {
  document.getElementById('out8').style.backgroundImage="url('Car bg1.png')"
  document.getElementById('out8').style.backgroundSize="40px 40px"
  document.getElementById('out8').style.backgroundColor="transparent"
  }
  else
  {
    document.getElementById('out8').style.backgroundImage="none"
  document.getElementById('out8').style.backgroundColor='transparent'
  }
  if(array2[3]==1)
  {
  document.getElementById('out9').style.backgroundImage="url('Car bg1.png')"
  document.getElementById('out9').style.backgroundSize="40px 40px"
  document.getElementById('out9').style.backgroundColor="transparent"
  }
  else
  {
    document.getElementById('out9').style.backgroundImage="none"
  document.getElementById('out9').style.backgroundColor='transparent'
  }
  if(array2[4]==1)
  {
  document.getElementById('out10').style.backgroundImage="url('Car bg1.png')"
  document.getElementById('out10').style.backgroundSize="40px 40px"
  document.getElementById('out10').style.backgroundColor="transparent"
  }
  else
  {
    document.getElementById('out10').style.backgroundImage="none"
  document.getElementById('out10').style.backgroundColor='transparent'
  }
}
function change4()
{
  if(array3[0]==1)
  {
  document.getElementById('out11').style.backgroundImage="url('Car bg1.png')"
  document.getElementById('out11').style.backgroundSize="40px 40px"
  document.getElementById('out11').style.backgroundColor="transparent"
  }
  else
  {
  document.getElementById('out11').style.backgroundImage="none"
  document.getElementById('out11').style.backgroundColor='transparent'
  }
  if(array3[1]==1)
  {
    document.getElementById('out12').style.backgroundImage="url('Car bg1.png')"
    document.getElementById('out12').style.backgroundSize="40px 40px"
    document.getElementById('out12').style.backgroundColor="transparent"
  }
  else
  {
  document.getElementById('out12').style.backgroundImage="none"
  document.getElementById('out12').style.backgroundColor='transparent'
  
  }
  if(array3[2]==1)
  {
  document.getElementById('out13').style.backgroundImage="url('Car bg1.png')"
  document.getElementById('out13').style.backgroundSize="40px 40px"
  document.getElementById('out13').style.backgroundColor="transparent"
  }
  else
  {
    document.getElementById('out13').style.backgroundImage="none"
  document.getElementById('out13').style.backgroundColor='transparent'
  }
  if(array3[3]==1)
  {
  document.getElementById('out14').style.backgroundImage="url('Car bg1.png')"
  document.getElementById('out14').style.backgroundSize="40px 40px"
  document.getElementById('out14').style.backgroundColor="transparent"
  }
  else
  {
    document.getElementById('out14').style.backgroundImage="none"
  document.getElementById('out14').style.backgroundColor='transparent'
  }
  if(array3[4]==1)
  {
  document.getElementById('out15').style.backgroundImage="url('Car bg1.png')"
  document.getElementById('out15').style.backgroundSize="40px 40px"
  document.getElementById('out15').style.backgroundColor="transparent"
  }
  else
  {
    document.getElementById('out15').style.backgroundImage="none"
  document.getElementById('out15').style.backgroundColor='transparent'
  }
}
function change5()
{
  if(array4[0]==1)
  {
  document.getElementById('out16').style.backgroundImage="url('Car bg1.png')"
  document.getElementById('out16').style.backgroundSize="40px 40px"
  document.getElementById('out16').style.backgroundColor="transparent"
  }
  else
  {
  document.getElementById('out16').style.backgroundImage="none"
  document.getElementById('out16').style.backgroundColor='transparent'
  }
  if(array4[1]==1)
  {
    document.getElementById('out17').style.backgroundImage="url('Car bg1.png')"
    document.getElementById('out17').style.backgroundSize="40px 40px"
    document.getElementById('out17').style.backgroundColor="transparent"
  }
  else
  {
  document.getElementById('out17').style.backgroundImage="none"
  document.getElementById('out17').style.backgroundColor='transparent'
  
  }
  if(array4[2]==1)
  {
  document.getElementById('out18').style.backgroundImage="url('Car bg1.png')"
  document.getElementById('out18').style.backgroundSize="40px 40px"
  document.getElementById('out18').style.backgroundColor="transparent"
  }
  else
  {
    document.getElementById('out18').style.backgroundImage="none"
  document.getElementById('out18').style.backgroundColor='transparent'
  }
  if(array4[3]==1)
  {
  document.getElementById('out19').style.backgroundImage="url('Car bg1.png')"
  document.getElementById('out19').style.backgroundSize="40px 40px"
  document.getElementById('out19').style.backgroundColor="transparent"
  }
  else
  {
    document.getElementById('out19').style.backgroundImage="none"
  document.getElementById('out19').style.backgroundColor='transparent'
  }
  if(array4[4]==1)
  {
  document.getElementById('out20').style.backgroundImage="url('Car bg1.png')"
  document.getElementById('out20').style.backgroundSize="40px 40px"
  document.getElementById('out20').style.backgroundColor="transparent"
  }
  else
  {
    document.getElementById('out20').style.backgroundImage="none"
  document.getElementById('out20').style.backgroundColor='transparent'
  }
}
document.onkeydown = function(event) {
    switch (event.keyCode) {
       case 37:
          console.log("Left")
          if(array5[0]==1)
          alert("Can't move towards left")
          else
          {
            for(let t=1;t<5;t++)
            {
                if(array5[t]==1)
                {
                array5[t-1]=1;
                array5[t]=0;
                break;
                }
            }
          }
          checkresult()
          change();
       break;
       case 39:
        {
            console.log("Right")
            if(array5[4]==1)
            alert("Can't move towards Right")
            else
            {
            for(let t=0;t<4;t++)
            {
                if(array5[t]==1)
                {
                array5[t+1]=1;
                array5[t]=0;
                break;
                }
            }
            }
            checkresult()
            change();
        }
       break;
    }
 };
 function change()
{
  if(array5[0]==1)
  {
  lefti1.style.backgroundImage="url('Car.png')"
  lefti1.style.backgroundSize="40px 40px"
  lefti1.style.backgroundColor="transparent"
  console.log("BG")
  }
  else
  {
  lefti1.style.backgroundColor='transparent';
  lefti1.style.backgroundImage='none'
  }
  if(array5[1]==1)
  {
    lefti2.style.backgroundImage="url('Car.png')"
    lefti2.style.backgroundSize="40px 40px"
    lefti2.style.backgroundColor="transparent"
    console.log("BG")
    }
    else
    {
    lefti2.style.backgroundColor='transparent';
    lefti2.style.backgroundImage='none'
    }
  if(array5[2]==1)
  {
    centeri1.style.backgroundImage="url('Car.png')"
    centeri1.style.backgroundSize="40px 40px"
    centeri1.style.backgroundColor="transparent"
    console.log("BG")
    }
    else
    {
    centeri1.style.backgroundColor='transparent';
    centeri1.style.backgroundImage='none'
    }
  if(array5[4]==1)
  {
    righti2.style.backgroundImage="url('Car.png')"
    righti2.style.backgroundSize="40px 40px"
    righti2.style.backgroundColor="transparent"
    console.log("BG")
    }
    else
    {
    righti2.style.backgroundColor='transparent';
    righti2.style.backgroundImage='none'
    }
  if(array5[3]==1)
  {
    righti1.style.backgroundImage="url('Car.png')"
    righti1.style.backgroundSize="40px 40px"
    righti1.style.backgroundColor="transparent"
    console.log("BG")
    }
    else
    {
    righti1.style.backgroundColor='transparent';
    righti1.style.backgroundImage='none'
    }
}
