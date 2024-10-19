function checkGP(gpid: string): boolean {
  let correctGP_ = false;
  let pathGPId = "";
  const regexGPId = /^[A-Z0-9]{8}$/g;
  const splitPath = location.pathname.split("/");
  splitPath.forEach(e => {
    if (regexGPId.test(e)) {
      pathGPId = e;
    }
  });
  correctGP_ = pathGPId === gpid;
  return correctGP_;
}

export default checkGP;
