window.NORTHSTAR_AI={
 version:"5.0.0",
 provider:"Cloudflare Workers AI + AI Gateway",
 mode:"cloudflare-worker-gateway",
 model:"@cf/meta/llama-3.1-8b-instruct",
 endpoint:"",
 allowLocalEndpoint:false,
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
  strategy:"cloudflare-ai-gateway",
  fallback:"cloudflare-workers-ai",
  providerSelection:"Cloudflare AI Gateway",
  compression:"gateway-controlled"
 },
 labPolicy:"Controlled and authorized environments only"
};
