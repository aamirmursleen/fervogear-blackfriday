export default function Footer() {
  return (
    <footer className="bg-black py-12 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-brand-orange mb-4">
              FervoGear
            </h3>
            <p className="text-gray-400 mb-4">
              Premium custom racing suits designed by racers, for racers.
              SFI-certified protection with unmatched style and turnaround time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                Twitter
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-orange">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:4094040962" className="hover:text-white transition-colors">
                  (409) 404-0962
                </a>
              </li>
              <li>
                <a href="mailto:sales@fervogear.com" className="hover:text-white transition-colors">
                  sales@fervogear.com
                </a>
              </li>
              <li className="text-sm">
                Monday - Saturday<br />
                8:00 AM - 5:00 PM PST
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-orange">Location</h4>
            <address className="text-gray-400 not-italic text-sm">
              8751 Collin McKinney Pkwy<br />
              Suite 1102, PMB 61<br />
              McKinney, TX 75070
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <div>
              © {new Date().getFullYear()} FervoGear. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>

        {/* Black Friday disclaimer */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-brand-orange/10 border border-brand-orange/30 rounded-lg px-6 py-3">
            <p className="text-brand-orange font-semibold">
              🔥 Black Friday Special: Limited to 47 orders • Ends Sunday 11:59 PM PST
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
