function animateMobile() {
	gsap.utils.toArray('.wrapper').forEach((container) => {
        const firstCampaignSectionMobile = $(container).find('.first');

        animateFirstCampaign(firstCampaignSectionMobile);

		function animateFirstCampaign(triggerSection) {
			const imgContentMobile = container.querySelector('.picture');

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
		}
	});
}

animateMobile();