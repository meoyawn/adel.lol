deploy:
	node nextgen.js
	vercel --prod
	say "site deployed"
