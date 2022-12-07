const wrappers = [...document.querySelectorAll(".img__w")];
    
    const calDeg = 360 / wrappers.length; 
    // 360deg / amount of images = init degree
    // eg. 360 / 6 = 60
    
    wrappers.forEach((wrp, idx) => {
        wrp.style.transform = `translate(-50%, 0%) rotate(${calDeg * idx}deg)`;
        // calDeg * idx  = init degree * image index 
    // 60 * 0 = 0 
    // 60 * 1 = 60
    // 60 * 2 = 120 
    // ....
    });