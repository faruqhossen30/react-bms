import React from 'react'
import Swal from 'sweetalert2';
import cogoToast from 'cogo-toast';
import withReactContent from 'sweetalert2-react-content';


const MySwal = withReactContent(Swal)

const logoutHandaller = () => {
    MySwal.fire({
      // title: 'Are you want to Logout ?',
      text: "Are you want to Logout ?",
      icon: 'warning',
      width: '25em',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Logout',
      customClass: 'swal2-popup'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        window.location = "/";
      }
    })
  }

  export default logoutHandaller;
