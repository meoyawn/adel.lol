deploy:
	rm -rf .next
	node nextgen.js
	vercel --prod
	say "site deployed"
