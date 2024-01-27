export default function UploadImageModal() {
  return (
    <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
  
          <div className="modal-content py-4 text-left px-6">
              <div className="flex justify-between items-center pb-3">
                  <p className="text-2xl font-bold">Upload image</p>
                  <div className="modal-close cursor-pointer z-50">

                  </div>
              </div>
              <p>Modal content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at purus urna.
                  Vestibulum nec erat in diam rutrum posuere. Fusce gravida orci nec mi volutpat euismod. Proin aliquet,
                  lacus sit amet egestas rhoncus, turpis nulla laoreet urna, nec ultricies nibh urna eu sapien. </p>

              <div className="mt-4 flex justify-end">
                  <button className="modal-close px-4 bg-gray-100 p-3 rounded-lg text-black hover:bg-gray-200">Cancel</button>
                  <button className="px-4 bg-purple-500 p-3 ml-3 rounded-lg text-white hover:bg-purple-400">Save</button>
              </div>
          </div>
      </div>
    </div>  
  )
}