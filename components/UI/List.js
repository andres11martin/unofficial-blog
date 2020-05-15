import styled from '@emotion/styled'

const List = styled.nav`
    width: 100%;
    margin: 0 auto 0 auto;

    ul{
        list-style-type: none;
        width: 100%;
        background: black;
        text-align: center;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
    }

  
    li{
        height: 5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    li:nth-child(1) {
        background: #00b0b0;
    }
    li:nth-child(2) {
        background: #00a0a0;
    }
    li:nth-child(3) {
        background: #009191;
    }
    li:nth-child(4) {
        background: #00a0a0;
    }
    li:nth-child(5) {
        background: #00b0b0;
    }
    li:nth-child(6) {
        background: #00a0a0;
    }
    li:nth-child(7) {
        background: #009191;
    }
    li:nth-child(8) {
        background: #00a0a0;
    }
    li:nth-child(9) {
        background: #00b0b0;
    }
    li:nth-child(10) {
        background: #00a0a0;
    }
    li:nth-child(11) {
        background: #009191;
    }
    li:nth-child(12) {
        background: #00a0a0;
    }
    li:nth-child(13) {
        background: #00b0b0;
    }
    li:nth-child(14) {
        background: #00a0a0;
    }
    li:nth-child(15) {
        background: #009191;
    }
    li:nth-child(16) {
        background: #00a0a0;
    }
    p{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: white;
        justify-content: center;
    }
       a {
           width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: white;
        justify-content: center;
        }
    a:hover{
        color: #8076a3;
        background: rgba(255,255,255, 0.2)
    }
   img{
       height: 5rem;
       width: 3.5rem;
       object-fit: cover;
   }

   @media (max-width: 600px){
       font-size: 3.8vw;
       letter-spacing: 0.3vw;
   }

`

export default List