window.NORTHSTAR_AI={
 version:"4.2.0",
 provider:"OmniRoute",
 mode:"local-omniroute",
 model:"cloudflare-ai/@cf/meta/llama-3.1-8b-instruct-fp8",
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
