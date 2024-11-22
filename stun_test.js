const pc = new RTCPeerConnection({
  iceServers: [
    {
      urls: [
        "stun:stun1.l.google.com:19302",
        "stun:stun2.l.google.com:19302",
        "stun:iphone-stun.strato-iphone.de:3478",
      ],
    },
  ],
});
pc.createDataChannel("test");

pc.onicecandidate = (event) => {
  if (event.candidate) {
    console.log("ICE Candidate:", event.candidate);
  } else {
    console.log("STUN Server Reachability Test Complete");
  }
};

pc.createOffer().then((offer) => pc.setLocalDescription(offer));
