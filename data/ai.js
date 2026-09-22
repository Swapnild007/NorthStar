window.NORTHSTAR_AI={
 version:"4.1.0",
 provider:"OmniRoute",
 mode:"local-omniroute",
 model:"auto",
 endpoint:"",
 localEndpoint:"http://127.0.0.1:20128",
 allowLocalEndpoint:true,
 architecture:"NorthStar -> OmniRoute -> model-provider",
 localModel:false,
 deviceModelStorage:false,
 roles:["Teacher","Socratic Tutor","Lab Mentor","Code Mentor","Examiner","Security Analyst"],
 privacy:{
  apiKeyInFrontend:false,
  modelStoredOnDevice:false,
  conversationStorage:"localStorage",
  backendRequired:false
 },
 routing:{
  strategy:"omniroute",
  fallback:"omniroute",
  providerSelection:"OmniRoute",
  compression:"gateway-controlled"
 },
 labPolicy:"Controlled and authorized environments only"
};
