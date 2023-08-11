
//for nav

const breadcrumbLinks = document.querySelectorAll('.navigationBar a');
const divLocate = document.querySelectorAll('.hidden');


breadcrumbLinks.forEach(element => {
    element.addEventListener('click', unhideOrhide)
})



function unhideOrhide(event) {
    event.preventDefault();
    let navId = this.getAttribute('name');
    let contentGrabber = document.getElementById(navId)
    Array.from(divLocate).forEach(element => {
      if (element === contentGrabber) {
          element.classList.remove('hidden');
      } else {
          element.classList.add('hidden');
      }
      
    })

    loadImage(navId);
  }


  //for descp. boxes
const descLinks = document.querySelectorAll('.clickableLinks a');


descLinks.forEach(element => {
    element.addEventListener('click', unhideOrhide)
})



//for images

function loadImage(popupId) {
  const imageContainer = document.getElementById('image-container');
  const popupImage = document.getElementById('popup-image');

  //imageContainer.style.opacity = 0;
  // Set the source of the image based on the popupId
  switch (popupId) {

      case 'hackbrightClick':
        // imageContainer.style.opacity = 0;

          popupImage.src = 'https://devmountain.com/wp-content/uploads/2022/04/b4GCVou48r0IWa8NQads0WY-p2AGZp60xU1gh-XaEx0aLr6ZDnkDDRzMTTuajw9QLAFCYUBxPmbqiSoK5xkYGMAtDsoYBtxyS6mlkMMFsVsj_OtR3oprmiTbXSa-P_N-LZWL6Zwg-1.png';
          break;

      case 'harvardClick':
          popupImage.src = 'https://www.classcentral.com/report/wp-content/uploads/2022/05/cs50-2023-student-demo.png';
          break;

      case 'college':
          popupImage.src = 'https://dailynous.com/wp-content/uploads/2023/07/logicians-famous-in-class-2.png';
          break;

      case 'teacher':
        popupImage.src = 'https://lh3.googleusercontent.com/pw/AIL4fc8gMOf1XSLmF2-kBu28Lts1jULpyaLvgEY7zO-IooAOOyrCKh8zBisqFlAdIwfth1mWIoYcjWcRaeu_iDeQnniUxHsyrEhPL4hLeh3WVwBKbwahhjhtnhxuS104G6LKYpwywQvUC5t4bimsd89x8rn2onQLcP-hS0l4Av2lx5lSFkbJtmSsFUg_i9Ips46wNmP6fWfssmHkFuQaF2NXWgSOjIhEiQkR6cyW1SQBOY7i_U4_VfP-5VmCQcMsaRpiXVQKA113YlYfcgFFi-DPvAELWBSmjJjRDVGpP9ghNrjtwCoU_1Fekfv6tIXaMimpLJllxK-BmVUUC31UJvm2eakSuTbHzJcFys0NdFnJXRrwEOQY1YqCvmT_yR698DT_laO2TEI5GfqchuKzA9Qqw9SgDdQ9nZr-WyxkjgggaLBdjOFbRLSWHjDyhQOMheEQgwYsbgPsK3FE8GX0xEmazmudWqOI2HLmhkMwM5Ujc1AZMUZiXL7L8LZTSHbBm1f7x1nh1XZs-HFk98jmSVvskXRcbgNG8s4_aCP-kDPv-QRggWVjVEVusHLKb5B8NvvEuIxS_YGAQtqNsL-YZmY18GsRjQWkA_Xuno11DOB3vjlNM__uA8jcfPU8GNV91njxHTdBFahDte0mKZ7u_YJ-oOYvGYa2SBnoPK4RU0wFPJ40JXMAa_RdNVERPgr-1z_DlSHNlqIKNT0lg_mx0G4ibKjQs3ghCvKCqf6SNC0lPqJEJmyKJUAStwQ9PlBgxddPYdObIeap-qVtFfiijyioQoUZKTzWaGoVfdZ_6voVLyRlByFwGTPnwyZlnUj_eIzA5aNqP2RsdqRTwWlLPeW-3Z0b-vpOa3VZJvCPRhn30JKmNQtKt6dMfvAv9Cc2rTCWGRN6QTj8Bz48bzzWhvlInC_rNm_nOyGAGtQQSHTmgK564VIXNNJJ9UzSWa50oAmG=w958-h719-s-no?authuser=0';
        break;
    
      case '':
        popupImage.src = '';
        break;
    
      case '':
        popupImage.src = '';
        break;

      case '':
        popupImage.src = '';
        break;
      
      case '':
        popupImage.src = '';
        break;
      
      case '':
        popupImage.src = '';
        break;

      case '':
        popupImage.src = '';
        break;
    
      case '':
        popupImage.src = '';
        break;
    
      case '':
        popupImage.src = '';
        break;

      case '':
        popupImage.src = '';
        break;
      
      case '':
        popupImage.src = '';
        break;
      
      case '':
        popupImage.src = '';
        break;

        case '':
        popupImage.src = '';
        break;
    
      case '':
        popupImage.src = '';
        break;
    
      case '':
        popupImage.src = '';
        break;

      case '':
        popupImage.src = '';
        break;
      
      case '':
        popupImage.src = '';
        break;
      
      case '':
        popupImage.src = '';
        break;












          
      default:
          popupImage.src = '';
          break;
  }


  imageContainer.style.opacity = 1;
  
}



