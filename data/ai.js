window.NORTHSTAR_AI={
 version:"4.1.0",
 provider:"OmniRoute",
 mode:"cloud-gateway",
 model:"auto",
 endpoint:"",
 architecture:"github-pages -> northstar-ai-gateway -> omniroute -> model-provider",
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
  strategy:"omniroute",
  fallback:"omniroute",
  providerSelection:"OmniRoute",
  compression:"gateway-controlled"
 },
 labPolicy:"Controlled and authorized environments only"
};
