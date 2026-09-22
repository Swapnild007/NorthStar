window.NORTHSTAR_AI={
 version:"4.0.0",
 provider:"OmniRoute + Cloudflare Workers AI fallback",
 mode:"cloud-gateway",
 model:"@cf/qwen/qwen3.8-27b",
 endpoint:"",
 architecture:"github-pages -> cloudflare-worker -> omniroute-or-workers-ai -> cloud-model",
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
  strategy:"omniroute-first",
  fallback:"cloudflare-workers-ai",
  providerSelection:"gateway-controlled",
  compression:"gateway-controlled"
 },
 labPolicy:"Controlled and authorized environments only"
};
