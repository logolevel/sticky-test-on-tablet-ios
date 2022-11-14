function animateMobile() {
	gsap.utils.toArray('.wrapper').forEach((container) => {
        const firstCampaignSectionMobile = $(container).find('.first');

        animateFirstCampaign(firstCampaignSectionMobile);

		function animateFirstCampaign(triggerSection) {
			const imgContentMobile = container.querySelector('.picture');
			const videoContentMobile = container.querySelector('.video-wrapper');

			const campaignBorderMobileTl = gsap.timeline({
				scrollTrigger: {
					id: 'campaignBorderMobileTl',
					trigger: triggerSection,
					toggleActions: 'play none none reverse',
					start: 'top 75%',
					end: 'bottom bottom',
					scrub: true,
				},
			});
			/* Campaign width animation */
			campaignBorderMobileTl.add('start');
			imgContentMobile
				? campaignBorderMobileTl.from(imgContentMobile, { width: '60%' }, 'start')
				: false;
				videoContentMobile
				? campaignBorderMobileTl.from(videoContentMobile, { width: '60%' }, 'start')
				: false;
		}
	});
}

animateMobile();

// TODO: Test the differences:
// $(window).on('scroll', _.throttle(() => {
// 	console.log('throttle on scroll');
// }, 500));

// $(window).on('scroll', _.throttle(() => {
// 	console.log('leading TRUE');
// }, 500, { 'leading': true }, ));
