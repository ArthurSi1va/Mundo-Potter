var listaFilmes = [
  
   [ "https://moviecom.com.br/site/wp-content/uploads/2020/08/harry-260x385.jpg","https://www.youtube.com/watch?v=SFzft_2dcV0&ab_channel=AdoroTrailers" ],
    ["https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJzvXdG92MzKiNHAzd93BrNf959gDYSOMS7Px3X-usGWD2G1di","https://www.youtube.com/watch?v=pVVvtcX6tds"],
    ["https://assetsgn.nowonline.com.br/assets/p34483_v_v8_bh.jpg","https://www.youtube.com/watch?v=Dx0fHxgwrTI"],
    ["https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ4CNTKkQbYKooC4Nh5-FH3b7s1oZiTytT1xgrhBalXHrDhJhk7","https://www.youtube.com/watch?v=cVKkL4O60IM"],
    ["https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ1q12N_FH4mGFsSViZJJz5Bk85MFfc7huH0UQimZ5hL70gYYHA","https://www.youtube.com/watch?v=ZkDCaxUNV3o"],
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSaeXnFE211rMejGP8YOhpHSWmuq-ircGNPhGTnPf_5TLLLioZ","https://www.youtube.com/watch?v=T68CyIl1TkA"],
    ["https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSh0CBVHD8hCVBj40l4qZDadNl-Mj1P8s_3mR_U3xQa1bwk_4em","https://www.youtube.com/watch?v=vX4uUtJfOPA"],
    ["https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQG9fL5AQQeh4AuAv3dimQ0aKWUxmELMp8_VRBflDW_DISRm8jB","https://www.youtube.com/watch?v=E79fa8bLfPA"]
  ];
  
  for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<a href=" + listaFilmes[i][1] + " target=" + "_blank" + ">");
    document.write("<img src=" + listaFilmes[i][0] + ">" + " </a>");
    
  }
