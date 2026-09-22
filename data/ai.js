window.NORTHSTAR_AI={
 version:"2.0.0",
 provider:"Cloudflare Workers AI",
 mode:"cloud",
 model:"@cf/qwen/qwen3.8-27b",
 endpoint:"",
 architecture:"cloud-gateway",
 localModel:false,
 deviceModelStorage:false,
 roles:["Teacher","Socratic Tutor","Lab Mentor","Code Mentor","Examiner","Security Analyst"],
 privacy:{
  apiKeyInFrontend:false,
  modelStoredOnDevice:false,
  conversationStorage:"localStorage",
  backendRequired:true
 },
 labPolicy:"Controlled and authorized environments only"
};
