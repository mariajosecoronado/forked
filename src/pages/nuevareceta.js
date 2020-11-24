import React from "react";
import "../style/style.css";
import axios from 'axios';
import {Table,Container,Modal,ModalHeader,ModalBody,FormGroup,ModalFooter,
} from "reactstrap";
import { FontAwesomeIcon, faEdit,faTrashAlt  } from '@fortawesome/react-fontawesome';
import { BsSearch } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { BsStar } from "react-icons/bs";
import { AiOutlineFileAdd } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import Swal from "sweetalert2";;

const url ="https://bj1li.sse.codesandbox.io/RECETAS";

class nuevaReceta extends React.Component {
  _Alert()  {
    Swal.fire({
      title: "¡Su receta ha sido publicada con éxito!",
      icon: "success",
      confirmButtonText: "¡ok!",
      confirmButtonColor: " #14dd28"
    })
    .then((resultado) => {
      if (resultado.value) {
        window.location.href = "/recetaperfil";
      }
    });
};
    

  _Alert2()  {
    Swal.fire({
      title: 'IMAGEN',
      text: 'Palitos.png',
      imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhISEhIQFRUVEBUVFRcVEg8PFQ8VFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lICYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgABBwj/xAA6EAABAwMDAgMGBAUCBwAAAAABAAIDBBEhBRIxQVFhcYEGEyIykaEUscHwFUJS0eEjYgckcoKSovH/xAAaAQADAQEBAQAAAAAAAAAAAAACAwQBBQAG/8QAJhEAAgICAgICAQUBAAAAAAAAAAECEQMhEjEEQRMiYRQyUXGBkf/aAAwDAQACEQMRAD8A3YUgFbFBdEtpkCg2E5JArI7ouGnV0UKu4TVjrsW52Q2WULKZcq3yALZTjE8otljVIIM1YCgK8JH6mH8jPhkMgF7cBL31oQslchn5UUFHC2OhMFP3wWb/ABhvypvrjZK/V6GfAPnVIVbqsd1nTVkqs1ZSX5jGLx0PZ66yBk1QoB9TcINxulZfIl6YzHiiNDXk9UPU1JKD95ZVSz3SXkbW2NUaejnyErtyoC8LugSLHIuL1E2U46CR3ATej0J3JTVjk/Qt5Ir2ZWuJZkLSey+rbmi6Jr9CBHRAUem+6OE/C5YpWeyccsKNY6rCqdqIHVJpZiBYpbPITwU6fmNdE8PFT7HtRqXYqgaiSkgkXCVSPyJP2P8AhS1Q5NZ4ouhrr4us6ZF1POWuW4s8oyBniUkbbcCFS+EFDafPuARxXai1JWc2ScXQDJSoOanITcyBRcAVjgmapNCEsK8Tc0y9SviC+QIiACvACDjKtEituiWrL3EBLa6uDETPNYLH6rXhziL8FS+Tm4RKcGLmxs7UroSavJSqKpXSTLkZcspdsvjiSYXLWHuqoKkkoCSRWU77JMHbGyjSHPvlB0yB/EqD6hOlJClBhjplITpWaleiZKUtBuI1D1GR4QDKhQlqFjejVEL94pNkSg1ardX+Kxs3iOJvi4RWmaUZMnhBabLuWigBDPREtKzJ6VIjUaK3b8JF0Npuim939CrWVDmnlTfqJOEuPkY362L4z6safiWMxYYVzdRvgLOmXcVc2XanY8s5d9APGgyumKXGoPdVVleCClja0XS5yt6Y+EWlsOlmuo2VDHXVt0STatmydPRVI1URxlxU55F2mT5slpbDcqR0rC1VwyXKbVrQWrOTuLCmNcVYMHyNppswAGUVLWLB02pOHVOaWu3J8fMbVIVLxknYxqqo9FRFqZHKrkddB2sULzTTtM9wi1TQ4GrjxXJOY1yP9VlA+HGbAhQJXXUXLts5aB69/wAJ8lgat/xu81vKnIWM1ems4kKHzIOStF3iTUXTB4Xq0yoVsLjwFF8Mg6LkSTOgqJzyqMdQl1TMRyLLzTi6V4a3uvRTDlQ0bObq4teRhpWp0n2djjaHSWvbhMJKunjFrN+yZ8VLbE/Jb0j51MHt5a76Kk6h0W7qdZp+CxpHklFSykmOGbT3QXBa5DUpPdGc/HHxVU2onxWti0SMjFiqpfZ5p6BbR60Yp1f4qqOr3OATjXPZ4sBLVkqUubJY9CmxgpK0A5UfRtIl2gFM36104SDTnXaFbVRqXJKVUhkYRk9jg1oKr9+s+2oLcKbq2ykS2G8VGibU2UJqvHKQNrCeFe2J7lQpNoFYkuyyae5QkrDe6JfSOablTmkFk/FitNsDLNdIto3lMA/CSRzgKTa8XAuij/AiS9hNW/so6c0h1ymtHQh4urJaMBNjiBeT0U1tRgJfPTGQ4VxjLnWTamiDQshq0wtraEX8MLQqqZxY6xWjkc0hJdShtkIJwj3E2Mn0xmHiyGldlAxVWF6yUkpblYahQV71eKhwyuXjKRuy1VvVjzZDSvX0rOIimdKpqHeUze5RbL2UmbJWkUY17I02lNA4C9mpY+LBemYoeVxOVz5uloqjbYh9oNIa5p2hB+xdF7re94yOPPon85uMpbXVHu2WbhKjkW2yhJvRLVdZdkApLukkPXzUqYF5ueFoaCnaLEhIcJZXbeh3NY9RFVJossnUppH7LS/1NTiOcDH2C8qNZEIzz2HTzRPx8SVyFrNlk6iAs0Sojy03V8c5adsgIKYU9dNMBZobf+Y4FvzUqnTZ343RnzDlqxJbx2e+W3WSgCppxILLH6p7NAO3ALdN0+SMZsfI/wB0PM5pw7B8UxTlAylLrZi6d2zBVr5bphqlC03LVn3yFpsVPLspR07VGlpHPKIh+IptTsDAh4r2FzOpKFreiYxMAQr5bC68jmJWtpC3bGgY1wsULW6PuHwq6mF01geAE7EmybJJI+ealRSR3wVnH1Ly8AX5X1+tax+CEqk0GK99ouibSZsU2gfRa/a0AnojZ6q/CUanp7mWc3gIf8YQLrY5qDeBNJodwx9US5yTU+rC2UTT1wcgc0bwZc4WXkrNwUibqUQssg9i5CEt2usiYxkKvVG7ZLq+Pi/gtr7Ug1L6lpK5DglcqVgYj5EfQZghJGopxQs55XZZykA1LrKmKcDCCqpyXEK2mgPJXIzTlKbovhBKOwmWVUOJVk8gHCHin5upZK2UQi6PS7us9rr7BPHzLPe0EwLSh46Gx0y7RstBTiKWx9MeCyns5Xgkxk+S0tOcknomr0BLTYbLOI235ceObnsoUtFnfJl/RvIb/lCwTbpCcEMH/sf2Ue+o2tuSvae2e2tIYRzhmSQESzX2DFyLeQ+qwepavdwAuT0HKbaPoYfZ9U51jkRtJbfztlL+aTdQDlhilcxvV+0zSC3c3y3WPrlLjqLHtDLNIGBk3A8Hc/VaCl0HTx8QhaL9HZ/Ne11BSNGII88fCG/ksyY8tXyQEMuOLpRZk56dwuYyXD+k2v6d1ntUzmxBW5dDGSfh2/8AScfThBappIkYeDjDgMjHB8FPFtPoq5Jox+nVKZsqbrL1DzDIWni+CjIaxMyRd2ejVGgdPdE07kkhnumUMmEMVbAmxzBNZWiqKWMlRUcngmcr0hfBLbGAmDvNWteUrlNuFOlqCvXumY1q0NpIQ4WWZ1nTNvAwVpYqgWVNTNuxZHJRWzMcpWYFumSk4BsiWNkiyQbLW2t0Xr4hILEBKbT7HXQnoK4OTH3oWc1igdTu3tvtVtJVlwC2LadAuClsY6pGHAFVUzrtAVgduaQupIVVgg5TsRlfGNF7YlyLaxcuqQWaWQoOodgomRyAqinMQhO/5yi2S4sgah9ir6L4lycirJRdF/Sz2OO5U309+AiWMaFz5B0SXBIJTYsqIFn9WpjYrTzOulleQRhLoeps+e+8dTyteOhX0CmqGuZvBwW3+qx2uU1wSrPZvUHNBjdkdPBNq1o1u+zTaPJcynu8AfRU67Xlot5D18FHSTtMnnf7JXqLjJMxnf75wkP9qQ2Ncmxr7NUN7yyC+cLSmci562x4BL2HY0AcNH1VsxIbu6njwXm+KpGP+WD12tNgBfKXHoLZJda4A8EBFrzZj8Mp3HgOu0nwF8H0XutUHvIm999x/wCJWfZpZ3NbaxLgL5FrnlDSraPKpbbNRFqTv5mnzH9kfBXbuD+i6WGONo3ua25sNx5KhFQj5gQR0IOD6pTxyXQKnHsB1vR21DXEAbrE9r2z9VgGuMbi13Qr61Rx3WD9stPG/e1u25T/AB3y+rCnP2CQ1HimtFU7ljPePb3Wg0aT4blNzYuEbBxz5M0bJroyOdI4p8ouOoUsdDpbGD5kRTSBKGy3REM1+ESdbBcb0P28L10lsIGGrwrxUhyK1IU00XXVlsXVML7nKLt9FqgmA5FDoRMwtcOiyM1K6CQtIx0WyfM1qCrJopBZ1vNeaVBwbsU0kl01pmIGGANOE2p2q7xGnYjyr7LQ1crg1cryEYvQFUUdKUBUpjFoSVQyiKN1lXUBSo8kLneRCp2V45XGg5xAFz9FTK+/FgqKtx3eqjvUM27opgktlE7nHF0DLGeckJu5gVMsSF2OWRGZ1KmJBWbif7uUea3FbT3WR1un2kG3BTsUqYLpjzcWva9vBHxDwKrc3/mIn9N/1uMfeyropN0bfJVVN8FpsRkeCpzeNyXKAjHnp1I1QJJt4q5172PF7D05/VB6TUe9DHdTa47OHKurJyw2P9Z+ngue1TdlMnaVBcjb7Rbj7qmoog43HT7FFsYXBp8LolkeCfqq4404kjm0zN6pE9+zcSdgsP19VPTWZTySm3jhBQxbTa3ClzQp2PhktUMaHBSfXYmyb2nkErRafT3PNgm9LolPcPcze697m9r+I4RYMM9NAPLFXZ8UqdP8EGHmPyX6Fno4pS0uja4tPw3aPhxZZn2j/wCH8FRvkiJjeegtsJ8ui6coqSomhlcWfJYq0IsVaorfZWqil906NzXE4JHwkdweCF9AoPYuDYzc03DRc3OT3UM/H3osXkIxsVVfATSCoaMLTP8AZSl4F7+aFf7IMvhz/rwkzxSXQ2GWPsVmUEL2KQgop/svMz5XtcPHBQDt0Zs5pB8jZK4tdh8k+hxT1g6qNfq7WA2Kz89e1nJykL6wzPIvgIuUmasK7HUusPldtZyUz0qnOHSc9km0qHYdy0TJViS7Nk6VDRjWnFl5TmxIVVOeq8jf8R80/HJxaZNNck0N2rl4w4C5dhUcx2FvuhJW3R0hQUqcxaFtTHhBtm2A25TGobdK6qEqPyYOUNFGCSUtlkUm4XJzdesZnKohI6YP5o2CLxFgL/8Axc+rRS9MuYwKEvwi6plnN8YXgO7lKc76QxQrtgtSARys7rlNcJ9VQm9xZVtZua4EBejLY1xSVoyekyEBzexRMrlVWU5jfuHXlVl111cGRSgRZYcZF9DqDoH7hkdR3/ytTVyioayeEh1vmbexdbp4ELFyBKn10sEgMb3NvzY4PmOEnycCltdh4Z7pn0/+PRBrcOa7c1uwg3ybXB6plTzH6r5UzX6h+CWG3XYL3Wt9n/aNrhtkLWuBt2B8krG2tMLLjraNtScZV/4cHNglEc4NiD4+aafixYWI/VM4L2TtsLhjt+7IhtRbqlgqrr0ygYyiVLoF2xt/EbDuoSamelkrYx7+wCtfQi3JXuUn0e4oMnrfeD49pHTwSmr1O1wCl+p1vuha+ScJRHUl3Kjz5ndFmDCqtjaKpu7klOWSBw5+nRZmF+02wpyVu3rhIU+PZRKHLo0U0mwHjjuksmptPzFhvxexQlPUvmwPl7903ptKjwXNHqB+SNpzVrQtNY3T2ZPXtKjnBdF8L/PBWNhYWOIOCDlfaDpsJ4Y30Fkk1j2Mhm+JhdG/vyD5hYoS6Y2OeJmdOlAAvlNKeoDlntT0OqpQ7cLs6OGQfRQ0edzBYm69+0NpS2ma0T7fVetfm4QNNLcXKlLOAL9Vli1E08B+EeS5A6fM50bT3H6rl2YVxRzZr7M0UkZQ74yjzEVB7VXRGmLpIkuqo04lCXVDEDQaEUhAKPppDbwsfyQlZGvKeXaLHqudnxqP2RXjly0EceqkXW5KFawOdcG9unZERAk8cGyir/g+zxzCeir93Y54RwNrhVFlu/6FZa/gNJv2ItSo93QhZ+WIsJB9Fv5X7r4/LCU19A2QZA8+Cjx5vjnfoJ4+caMi8pdWwbvNPtQ00xHBu3v280tmjXUjJTjaImnB7F20MaT1sjtHi3MDu6FnbiyL0qUBluxKiyRcEyqMubNPoQke9rGvdta25HIt0AutJseOPyQXsnS2j3nmQ38m9P34rTxUvomY4/UmyS+wugppD/N+SZw09uVZua3hC12obB+nU+iNqMVbFq5aQwbI1oSbUtbY0E3vyBbP5JfWSSzNLfkaRmx+Ijz6LKS6bLSncwl8V8g5MfiO4SMmfX1KcWBX9iNXqhnkL824A7IqKbCT10gbICOHC/r1R1HIObrny27OgqSpDJtQhxN79+0fK3nxPZL9QqrCzeSbBNNJjEbB3OT4krYx9sybrSNPpsbYwBjhNGyNPN/7LKxzlEjUCzqmxyk8sVmhD3C5AxbuFB1Z6/ZZwarI75c/YFE0FPuJc4kW6bu6JScugXBR7GlRVtIIcARwc3WUrtBw6SEgkXdt4uPDxWinooSMtvnJF7j1CX1NI6IF8bnEDO0np4LJNrvYyDVaMrTV5OLFNaWkMhF72THT6OKYl7QAeSMYKdU9M1vAVuHxoTSl2ifL5EoNx9ntPDZoFuAuTBjcLl0KIeQc5xVcjlE37qt3mmsSit55QcmUS8hUOQNhIXVMKXVEVk5qOEA9l+EqcU00xkW09C+hHxEd0zkftw3pz4lBmjIcHNN85HCqMpudwcCTi/X1XHlS0mdBJvbDmv7q9rscIKN6LbJjwWVSMKH3vxde7cHBV8bBcWupyMF0loepoUV8DXtWTlisSD0K2lZGBdZmvaN5t6qvwpNScRXkJOKYnmhVdDTlzxGOXOAHqj5Ik59jtPDpjK7iMY8XOx9hf6q/JFSVMkjJxdo29DCI2tHZoHlYIoOJQwcpmTa0uPAFz6IUAR1GtELL8k4A7n+yQRBzyXE3JXSTGaQvdwMNHYeKKiaFz883kf4LMSUF+TqckG3KIkpyQRYWt9fRQAyujqrHN7KdOtMdTe0YX2z08wASNB27h/2E9/BLtPrQRyvptZAydjmPAs5pBC+P1lA+nlfHf5XW8x0P0VEMSmq9nnka7GlO/fNfo0Y81omP48li6WdzXEnr6WWoopwRfwXs2NxSR6M7djNkluVAv3Gwvn7BVucF1Fclx8ceCTCNvYcpUrGcEjWgD7q0VgB/XKXudfCi59uyKU2wYxQ8p61vDj/YImSQH5e3oR4rOxORMdQW46IFkfsP416I6ewxVW1vyuyB4c/Za2Niz9MzfKx39N8+Y4WkiXW8FVj/ANIPNdzX9FgYVysDvNcrqIrKy5VlXuh/eFzo+yJoBMCkCpJR0sSpdEgaCTAZQh5YsJk9iGmahaNTFQbk5It+SvJxcnH3K8ebHzFv7Kr3Z/wuNmxOEqR0oZeStkgB0t9FW0/ERfjsukktwgaKo+N9z/Mkp74jWrjZoYgABZUTSIWSrPF+qg2puFmWS6RmOD7K6qQODlnJDucT4pnXSEB1vRK4lX4Ue5CvJfokIrrW6TGI2Bo55Pieqy7QtDpkt2D6KvI2TIcsKB9pqktjaz+si6KhclvtbYMjd/vAHhzf7JOR/Rm4190DUhsMq91SAL/4CTsrgbtbl3X/AGoulpy/5iokmyvS7L/4kOgJ8gvPx1vmD/oCj4KVoAsArJKdqyUPyHHJ+Aalq2uDiHcc9wkXtNQhxZIAMix/RC6jqX4WqAaLtLbSDx6eqfTSNljx5hHglxmjcsbi2YmSgXU73RYtcLSGm8FXNpt105Y1JUyJZKAIa9rhz6cFF6XJgjizj1vcchD1Gh3GEv8A4RIx25rnXAsDc8Kf9NTtDfmTVD+Z2Ta6qjcb54QDaqRtveC/iMfUK+lq2v4Oex5+ilnikn0PhNNB7JrYx91IvubEfflCyKp9SGjOPRJasdEd01SWm4PT6rYQcD92WS9mIA7/AFDkfy4tnrz2Wrjf2XV8LG4xt+zn+ZNOVL0FX81yrBK5XEQUf3woErlyNiEVkXUXtXLkIdg0iFkZdcuQBIAqYShmvOQe31XLlP5EU4Mdik0yuawz1sklLON7+cO+65cuHJ7OtDaCzNfCi+axLev5LxchWxtUe1Au2ypZAvFy6XhP6P8As5/lan/hN0Stoar3ZseD9ly5VPZMmPIahZj2xr3e8jaHGzRcjoScBerkqr0wounYq0Oq/wBR4dy632WtglwFy5S51xdIfFt7YSJVKOa/K5cpJt2PgBarp8c3zNHZB6c0xExuNxb4T4LxcvW9MZHpoZMiB80VHTXXLl9AjkM40qqdSA9Fy5aesHl04EcBLJtJYDxnwsuXIWkFGTIsoXcbrjxRtLQgXBAN8O/ZXLkMccU7SGPJKqs0FDHYAAAY6YFimcP78Vy5PRPJhFl4uXIwLP/Z',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    });
   
  }
  constructor(){
    super();
    this.state = {
      data:[],
      modalInsertar: false,
      modalEliminar: false,
      form:{
        id: '',
        Ingredientes: '',
        Tipo_receta: '',
        Preparacion: '',
        Tiempo: '',
        Video: '',
        Fecha: ''
      }
    }}
    modalInsertar=()=>{
      this.setState({modalInsertar: !this.state.modalInsertar});
    }

    seleccionarCarro=(receta)=>{
      this.setState({
        tipoModal: 'actualizar',
        form: {
           id: receta.id,
           Ingredientes: receta.Ingredientes,
           Tipo_receta: receta.Tipo_receta,
           Preparacion: receta.Preparacion,
           Tiempo: receta.Tiempo,
           Video: receta.Video,
           Fecha: receta.Fecha,
       
        }
      })
     }
     peticionesGet=()=>{
      axios.get(url).then(response => {
        //console.log(response.data) 
        //asignaremos al estado
        this.setState({data: response.data})
      }).catch(error=>{
        console.log(error.message);
      })
    }
    
    //Petición tipo POST
    peticionesPost=async()=>{
      await axios.post(url,this.state.form).then(response=>{
        this.modalInsertar();
        this.peticionesGet();
      }).catch(error=>{
        console.log(error.message);
      })
    }
    
    //Peticiones tipo PUT
    peticionesPut=()=>{
      axios.put(url+this.state.form.id, this.state.form).then(response=>{
        this.modalInsertar();
        this.peticionesGet();
      }).catch(error=>{
        console.log(error.message);
      })
    }
    
    PeticionesDelete=()=>{
      axios.delete(url+this.state.form.id).then(response=> {
        this.setState({modalEliminar: false});
         this.peticionesGet();
      }).catch(error=>{
        console.log(error.message);
      })
    }
    
    //carpturar lo que el usuario inserte en las cajas de texto
    //como se ejecuta en segundo plano debe ser asíncrono
    handleChange= async e=>{
    e.persist();
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form)
    }
    
    //primer ciclo de vida de los componentes
    
    componentDidMount(){
      this.peticionesGet();
    }
 render(){
   const {form}=this.state;

   return(
     <div>
       <div className="encabezado">
          <Nav.Link eventKey="link-1" className="encabezado" href="perfil">
            <h1>
              <BsArrowLeft />
            </h1>
          </Nav.Link>

          <img
            className="icon-p"
            src="https://raw.githubusercontent.com/Saracas-022/holamundo/main/logotipo.jpeg"
            alt="logo"
            width="200"
            height="150"
          />

          <Nav.Link href="buscar" eventKey="Busqueda" className="encabezado ">
            <h1>
              {" "}
              <BsSearch />{" "}
            </h1>
          </Nav.Link>
        </div>
        <br/>
        <div  className="icono">
        <button className="btn btn-success"  onClick={()=>{this.setState({form: null, tipoModal:'insertar'});this.modalInsertar()}}>Agregar receta</button>
        </div>
        <br/><br/>
        <section className="contenedorEjercicios  ">
          
          <ul className="card-deck mb-3 text-center">
            {this.state.data.map((receta, indice) => {
              return (
                <div className="col-md-4 ">
                  <div className="card  mt-4" key={indice}>
                  <p className="card-title"> {receta.Ingredientes}</p>
         <img src={receta.Video} alt="Img"></img>
                
                <div  >
                  <li>{receta.Tipo_receta}</li>
                </div>
                <button
                    type="button"
                    className="btn btn-success"
                  >
                    <a href={receta.ruta}>¿Cómo se hace?</a>{" "}
                  </button>
                  <button className="btn btn-success" onClick={()=>{this.seleccionarCarro(receta);this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/>Actualizar</button>
                      {" "}
                      <button className="btn btn-success" onClick={()=>{this.seleccionarCarro(receta);this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/>Eliminar</button>
                    
                </div>
                </div>
              );
            })}
          </ul>
          
          
        </section>

        <div className="container text-center">
        <Modal id="formContent" isOpen={this.state.modalInsertar}>
        
          <img
            className="icono"
            src="https://raw.githubusercontent.com/Saracas-022/holamundo/main/logotipo.jpeg"
            alt="logo"
            width="200"
            height="150"
          />
          <h1 className="icono">Nueva receta </h1>
          <ModalHeader style={{display: 'block'}}>
          </ModalHeader>
          <ModalBody>
        
            <div className="form-group wrapper fadeInDown">
              <label htmlFor="PLACA">Id</label><br />
              <input className="form-control" type="text" name="id" id="id"   onChange={this.handleChange} value={form?form.id: '' }/>
              <br/>
              <label htmlFor="nomejercicio">Descripción receta</label>
              <input className="form-control" type="text" name="Descripcion" id="Descripcion"  onChange={this.handleChange} value={form?form.Descripcion: '' }/>
              <br/>
              <label htmlFor="descripcion">Tipo de receta</label>
              <input className="form-control" type="text" name="Tipo_receta" id="Tipo_receta" onChange={this.handleChange} value={form?form.Tipo_receta: ''}/>
             <br/>
             <label htmlFor="MODELO">Preparación</label>
              <input className="form-control" type="text" name="Preparacion" id="Preparacion" onChange={this.handleChange} value={form?form.Preparacion:''}/>
              <br/>
              <label htmlFor="MODELO">Tiempo</label>
              <input className="form-control" type="text" name="Tiempo" id="Tiempo" onChange={this.handleChange} value={form?form.Tiempo:''}/>
              <br/>
              <label htmlFor="MODELO">Video</label>
              <input className="form-control" type="text" name="Video" id="Video" onChange={this.handleChange} value={form?form.Video:''}/>
              <br/>
              <label htmlFor="MODELO">Fecha</label>
              <input className="form-control" type="text" name="Fecha" id="Fecha" onChange={this.handleChange} value={form?form.Fecha:''}/>
              <br/>
              </div>
          
          </ModalBody>
          <ModalFooter >
            {this.state.tipoModal=='insertar'}
            <button className="btn btn-success" onClick={()=>this.peticionesPost()}>
              Insertar
            </button>
             <button className="btn btn-success" onClick={()=>this.peticionesPut()}>
              Actualizar
            </button>
            <button className="btn btn-success" onClick={()=>this.modalInsertar()}>
              Cancelar
            </button>
          </ModalFooter>
      
        </Modal>
        </div>
       <Modal isOpen={this.state.modalEliminar}>
         <ModalBody>
           Está seguro de eliminar esta receta {form && form.PLACA}
         </ModalBody>
         <ModalFooter>
           <button className="btn btn-danger" onClick={()=>this.PeticionesDelete()}>Sí</button>
           <button className="btn btn-success" onClick={()=>this.setState({modalEliminar: false})}>No</button>
         </ModalFooter>
       </Modal>
       <footer className="header">
          CONTÁCTENOS
          <button className="button">
            {" "}
            <Nav.Link href="/mensaje" className="black">
            punto  CLICK AQUÍ
            </Nav.Link>{" "}
          </button>
          <Nav.Link href="/mensaje" className="black"></Nav.Link>{" "}
        </footer>
      </div>  
   );
 }

}
            
          
   

export default nuevaReceta;

