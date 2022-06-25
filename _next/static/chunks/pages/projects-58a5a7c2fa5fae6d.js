(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{9182:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return i(4746)}])},8396:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var a=i(5893),n=i(9008),s=i.n(n),o=i(1163);function r(e){var t=(0,o.useRouter)(),i=e.title?e.title+" | LAION":"LAION",n=e.desc?e.desc:"LAION, Large-scale Artificial Intelligence Open Network, is a non-profit organization making machine learning resources available to the general public.",r=e.image?e.img:"/social.png",l=e.alt?e.alt:"The text: LAION. Large-scale Artificial Intelligence Open Network, TRULY OPEN AI. 100% NON-PROFIT. 100% FREE.",c=e.slug?e.slug:t.route;return(0,a.jsxs)(s(),{children:[(0,a.jsx)("title",{children:i}),(0,a.jsx)("meta",{name:"title",content:i}),(0,a.jsx)("meta",{property:"og:title",content:i}),(0,a.jsx)("meta",{property:"twitter:title",content:i}),(0,a.jsx)("meta",{name:"description",content:n}),(0,a.jsx)("meta",{property:"og:description",content:n}),(0,a.jsx)("meta",{property:"twitter:description",content:n}),(0,a.jsx)("meta",{property:"og:image",content:r}),(0,a.jsx)("meta",{property:"twitter:image",content:r}),(0,a.jsx)("meta",{name:"twitter:image:alt",content:l}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:url",content:"https://laion.ai"+c}),(0,a.jsx)("meta",{property:"twitter:url",content:"https://laion.ai"+c}),(0,a.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,a.jsx)("meta",{name:"theme-color",content:"#1D374E"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon.png"})]})}},4746:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return l}});var a=i(5893),n=i(8396),s=i(1664),o=i.n(s),r=JSON.parse('[{"name":"Datasets","entries":[{"name":"LAION-400M","modality":"image/text","status":"Released","desc":"Formerly known as crawling@home (C@H), we have created an openly accessible 400M image-text-pair dataset.","link":"/blog/laion-400-open-dataset"},{"name":"LAION5B","modality":"image/text","status":"Released","desc":"To democratize research on large-scale multi-modal models, we present LAION-5B \u2013 a dataset consisting of 5.85 billion CLIP-filtered image-text pairs, featuring several nearest neighbor indices, an improved web-interface for exploration and subset generation, and detection scores for watermark, NSFW, and toxic content detection.","link":"/blog/laion-5b"},{"name":"LAION5B High-Res","modality":"image/text","status":"Released","desc":"A subset of the LAION5B database, with high resolution images oveer 1024x1024, containing 170 million samples.","link":"https://huggingface.co/datasets/laion/laion-high-resolution"},{"name":"LAION Aesthetics","modality":"image/text","status":"Released","desc":"NEEDED","link":"https://github.com/LAION-AI/laion-datasets/blob/main/laion-aesthetic.md"},{"name":"LAION-3D","modality":"3d/image/text","status":"Started","desc":"NEEDED","link":"https://github.com/LAION-AI/laion-3d"},{"name":"Audio Dataset","modality":"text/audio","status":"Started","desc":"NEEDED","link":"https://github.com/LAION-AI/audio-dataset"}]},{"name":"Models","entries":[{"name":"Openclip","modality":"image/text","kind":"Contrastive","status":"released","desc":"Reproduced openai clip","link":"https://github.com/mlfoundations/open_clip"},{"name":"DALLE-2 Prior/Decoder","modality":"image/text","kind":"Generative","status":"Started","desc":"Trying to reproduce dalle2","link":"https://github.com/lucidrains/DALLE2-pytorch"},{"name":"Clipcap","modality":"image/text","kind":"Generative","status":"Released","desc":"Generate text from embedding","link":"https://github.com/TheoCoombes/ClipCap"},{"name":"Audio clip","modality":"audio/text","kind":"Contrastive","status":"Trained proof of concept, scaling","desc":"","link":"/projects"},{"name":"Video clip","modality":"video/text","kind":"Contrastive","status":"Started","desc":"","link":"https://github.com/LAION-AI/video-clip"},{"name":"Multilingual-CLIP","modality":"image/text","kind":"Contrastive","status":"Just started","desc":"OpenAI CLIP text encoders for any language.","link":"https://github.com/FreddeFrallan/Multilingual-CLIP"},{"name":"Super-resolution","modality":"image->image","kind":"Generative","status":"Started","desc":"Using a high-resolution subset of LAION-5B for the training","link":"https://github.com/LAION-AI/super-resolution"},{"name":"Medical CLIP","modality":"image/text","kind":"Contrastive","status":"Started","desc":"Using CLIP to improve MRI -> image synthesis (see project outline).","link":"https://github.com/LAION-AI/medical"},{"name":"NSFW Detection","modality":"image/text","kind":"Contrastive","status":"Released","desc":"Using CLIP to detect NSFW in images.","link":"https://github.com/LAION-AI/CLIP-based-NSFW-Detector"},{"name":"Watermark Detection","modality":"image/text","kind":"Contrastive","status":"Released","desc":"Detector for watermarks in images.","link":"https://github.com/LAION-AI/LAION-5B-WatermarkDetection"},{"name":"Electric Sheep","modality":"image/text/audio/video","kind":"Contrastive/Generative","status":"Started","desc":"Train Contrastive and generative models on all modalities.","link":"https://github.com/LAION-AI/the-big-plan/blob/main/projects/electric-sheep.md"}]},{"name":"Tools","entries":[{"name":"img2dataset","modality":"image/text","status":"Released","desc":"Used to download laion5B in a week, twice","link":"https://github.com/rom1504/img2dataset"},{"name":"Clip Retrieval","modality":"image/text","status":"Released","desc":"Used to compute 5B Vit-L/14 embeddings","link":"https://github.com/rom1504/clip-retrieval"},{"name":"Crawlingathome-gpu-hcloud","modality":"image/text","status":"Released","desc":"Filtering common crawl using clip","link":"https://github.com/rvencu/crawlingathome-gpu-hcloud"},{"name":"Clip Benchmark","modality":"image/text","status":"In Progress","desc":"Evaluating clip performances easily","link":"https://github.com/LAION-AI/CLIP_benchmark"}]},{"name":"Papers","entries":[{"name":"LAION-400M","modality":"image/text","status":"Published","link":"https://arxiv.org/abs/2111.02114"},{"name":"LAION-5B","modality":"image/text","status":"started","link":"https://github.com/LAION-AI/laion5B-paper"}]}]');function l(){return(0,a.jsxs)("div",{className:"w-full flex justify-center py-5 pt-16 md:pt-5",children:[(0,a.jsx)(n.Z,{title:"Projects",desc:"A selection of open-source projects maintained by LAION, the Large-scale Artificial Intelligence Open Network, to be used freely in machine learning efforts."}),(0,a.jsxs)("div",{className:"container px-5",children:[(0,a.jsx)("h1",{className:"text-7xl md:text-8xl font-bold",children:"PROJECTS"}),(0,a.jsx)("hr",{className:"mb-5 mt-2 md:hidden"}),r.map((function(e,t){return(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"pb-4 "+(0===t?"pt-0":"pt-5"),children:e.name.toUpperCase()}),(0,a.jsx)("div",{className:"grid gap-5 grid-cols-2",children:e.entries.map((function(e,t){return"/"===e.link.charAt(0)?(0,a.jsx)("a",{className:"no-underline "+(void 0===e.desc?"col-span-1":"col-span-2"),children:(0,a.jsx)(o(),{href:e.link,children:(0,a.jsx)(c,{item:e})},t)}):(0,a.jsx)("a",{href:e.link,rel:"noopener noreferrer",target:"_blank",className:"no-underline "+(void 0===e.desc?"col-span-1":"col-span-2"),children:(0,a.jsx)(c,{item:e})},t)}))})]},t)}))]})]})}function c(e){var t=e.item;return(0,a.jsxs)("div",{className:" bg-sky border border-paper hover:bg-paper hover:text-sky cursor-pointer transition-colors p-5 shadow-lg shadow-neutral-800/20 flex flex-col sm:flex-row ",children:[(0,a.jsxs)("div",{className:void 0!==t.desc&&"basis-1/4",children:[(0,a.jsx)("p",{className:"text-2xl",children:t.name}),(0,a.jsx)("p",{children:t.modality}),(0,a.jsx)("p",{children:t.kind}),(0,a.jsxs)("p",{children:["Status: ",t.status]})]}),(0,a.jsx)("hr",{className:"mt-4 mb-4 sm:hidden "+(void 0===t.desc&&"hidden")}),(0,a.jsx)("div",{className:"basis-3/4 "+(void 0===t.desc&&"hidden"),children:t.desc})]})}},9008:function(e,t,i){e.exports=i(3121)},1163:function(e,t,i){e.exports=i(880)}},function(e){e.O(0,[774,888,179],(function(){return t=9182,e(e.s=t);var t}));var t=e.O();_N_E=t}]);