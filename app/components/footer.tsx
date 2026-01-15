export default function Footer() {
    return (
        <>
      <footer className="bg-gray-900 text-gray-300 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="text-white text-2xl font-bold">
                  Alt<span className="block h-0.5 w-8 bg-white"></span>School
                </div>
              </div>

              <div className="flex gap-4 mb-6">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>

              <div className="text-sm space-y-2">
                <p>Email: support@altschoolafrica.com</p>
                <p>Tel: +1737213187</p>
              </div>

              <p className="text-sm mt-6">© 2026 AltSchool. All rights reserved</p>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Companies</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Hire our Grads</a></li>
                <li><a href="#" className="hover:text-white transition">Collaborate with us</a></li>
              </ul>

              <h4 className="text-white font-semibold text-lg mb-4 mt-8">Schools</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">School of Engineering</a></li>
                <li><a href="#" className="hover:text-white transition">School of Product</a></li>
                <li><a href="#" className="hover:text-white transition">School of Data</a></li>
                <li><a href="#" className="hover:text-white transition">School of Business</a></li>
                <li><a href="#" className="hover:text-white transition">School of Creative Economy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Nano-Diploma</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Javascript for Beginners</a></li>
                <li><a href="#" className="hover:text-white transition">SQL for Beginners</a></li>
                <li><a href="#" className="hover:text-white transition">UI/UX Foundation</a></li>
                <li><a href="#" className="hover:text-white transition">Fintech Product Management</a></li>
                <li><a href="#" className="hover:text-white transition">Data Modelling for Beginners</a></li>
                <li><a href="#" className="hover:text-white transition">Navigating the Music Business in Africa: Afrobeats case study</a></li>
                <li><a href="#" className="hover:text-white transition">Mobile Content Mastery for African Creators</a></li>
                <li><a href="#" className="hover:text-white transition">High-Impact Selling: From Prospecting to Closing</a></li>
                <li><a href="#" className="hover:text-white transition">Foundations of Product Management</a></li>
                <li><a href="#" className="hover:text-white transition">Foundations of Cybersecurity</a></li>
                <li><a href="#" className="hover:text-white transition">Cybersecurity - Identity and Access Management (IAM)</a></li>
                <li><a href="#" className="hover:text-white transition">Cybersecurity - Networking and System Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Diploma</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Backend Engineering</a></li>
                <li><a href="#" className="hover:text-white transition">Cloud Engineering</a></li>
                <li><a href="#" className="hover:text-white transition">Frontend Engineering</a></li>
                <li><a href="#" className="hover:text-white transition">Cybersecurity</a></li>
                <li><a href="#" className="hover:text-white transition">Product Design</a></li>
                <li><a href="#" className="hover:text-white transition">Product Management</a></li>
                <li><a href="#" className="hover:text-white transition">Product Marketing</a></li>
                <li><a href="#" className="hover:text-white transition">Data Analysis</a></li>
                <li><a href="#" className="hover:text-white transition">Data Engineering</a></li>
                <li><a href="#" className="hover:text-white transition">Data Science</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-4">About Us</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">Earn Program</a></li>
              </ul>

              <h4 className="text-white font-semibold text-lg mb-4 mt-8">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition">Our Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Scholarship</a></li>
                <li><a href="#" className="hover:text-white transition">NYSC Program</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div>
                <p className="text-sm mb-4">In Partnership with</p>
                <div className="flex items-center gap-4">
                  <svg className="h-8" viewBox="0 0 100 32" fill="white">
                    <path d="M61.896 17.336c-1.368 0-2.304-.456-2.808-1.368-.288-.528-.432-1.176-.432-1.944 0-.768.144-1.416.432-1.944.504-.912 1.44-1.368 2.808-1.368s2.304.456 2.808 1.368c.288.528.432 1.176.432 1.944 0 .768-.144 1.416-.432 1.944-.504.912-1.44 1.368-2.808 1.368zm0-8.304c-2.232 0-3.96.696-5.184 2.088-1.032 1.176-1.548 2.76-1.548 4.752s.516 3.576 1.548 4.752c1.224 1.392 2.952 2.088 5.184 2.088s3.96-.696 5.184-2.088c1.032-1.176 1.548-2.76 1.548-4.752s-.516-3.576-1.548-4.752c-1.224-1.392-2.952-2.088-5.184-2.088zm-13.608 0c-1.368 0-2.424.36-3.168 1.08V9.464h-3.168v13.248h3.168v-7.416c0-1.656.792-2.484 2.376-2.484 1.464 0 2.196.756 2.196 2.268v7.632h3.168v-8.208c0-2.856-1.56-4.284-4.572-4.284zm-16.128 0c-2.232 0-3.96.696-5.184 2.088-1.032 1.176-1.548 2.76-1.548 4.752s.516 3.576 1.548 4.752c1.224 1.392 2.952 2.088 5.184 2.088s3.96-.696 5.184-2.088c1.032-1.176 1.548-2.76 1.548-4.752s-.516-3.576-1.548-4.752c-1.224-1.392-2.952-2.088-5.184-2.088zm0 11.688c-1.368 0-2.304-.456-2.808-1.368-.288-.528-.432-1.176-.432-1.944 0-.768.144-1.416.432-1.944.504-.912 1.44-1.368 2.808-1.368s2.304.456 2.808 1.368c.288.528.432 1.176.432 1.944 0 .768-.144 1.416-.432 1.944-.504.912-1.44 1.368-2.808 1.368zm-11.304-11.328h-3.168v9.504c0 2.736 1.392 4.104 4.176 4.104.504 0 .936-.024 1.296-.072v-2.736c-.24.024-.48.036-.72.036-1.2 0-1.584-.528-1.584-1.584v-5.472h2.304v-2.784h-2.304V6.656l-3.168.504v2.236h-1.296v2.784h1.296zm-9.984 13.32h3.168V9.464h-3.168v13.248zm0-14.832h3.168V5.672h-3.168v2.136z"/>
                  </svg>
                  <span className="text-3xl font-bold">GitHub</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <img src="/api/placeholder/80/80" alt="GSV CUP Elite 200" className="w-20 h-20 rounded" />
                  <div className="text-sm">
                    <p className="font-semibold text-white">GSV CUP ELITE 200.</p>
                    <p>World's most innovative Edtech startups '23</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <img src="/api/placeholder/80/80" alt="ASIC Accredited" className="w-20 h-20 rounded" />
                  <div className="text-sm">
                    <p className="font-semibold text-white">Accredited by ASIC</p>
                    <p>(Accreditation Service for International Schools, Colleges, and Universities)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
              <p>TalentQL Technologies. © 2021-2026 TalentQL, Inc.</p>
            </div>
          </div>
        </div>
      </footer>
      </>
  );
}
