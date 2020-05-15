import styled from '@emotion/styled'

const ShowsList = styled.nav`
    width: 100%;
    margin: 0 auto 0 auto;

    ul{
        list-style-type: none;
        width: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
    }

    li{
        display: flex;
        justify-content: space-between;
        border: 1px solid grey;
        padding: 2%;
        width: 96%;
        margin-top: 2vh;
    }

    .showInfo{
        width: 55%;
    }

   .showImg{
       width: 40%;
   }
   h1{
       text-align: center;
        margin-top: 80%;
   }
   img{
       width: 100%;
   }

   a{
       text-decoration: none;
       :hover{
           color: rgb(69, 32, 129);
       }
   }
   @media (max-width: 600px){
       li{
           font-size: 12px;
           display: flex;
           flex-direction: column;
           align-items: center;
       }
       h1{
           font-size: 8px;
  

           padding: 5px;
           margin-top: 0;
           border: 1px solid rgb(170, 170, 170, 0.8);

       }
       .showInfo{
        width: 100%;
    }
        .showImg{
            width: 30%
            justify-content: center;
        }
   }

`

export default ShowsList