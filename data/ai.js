window.NORTHSTAR_AI={
 version:"3.6.0",
 provider:"OmniRoute",
 mode:"cloud-gateway",
 model:"auto",
 endpoint:"",
 architecture:"github-pages -> cloudflare-worker -> omniroute -> provider",
 localModel:false,
 deviceModelStorage:false,
 roles:["Teacher","Socratic Tutor","Lab Mentor","Code Mentor","Examiner","Security Analyst"],
 privacy:{
  apiKeyInFrontend:false,
  modelStoredOnDevice:false,
  conversationStorage:"localStorage",
  backendRequired:true
 },
 routing:{
  strategy:"auto",
  fallback:true,
  providerSelection:"OmniRoute",
  compression:"gateway-controlled"
 },
 labPolicy:"Controlled and authorized environments only"
};
