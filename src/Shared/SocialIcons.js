import React from 'react';
import { useSignInWithGoogle, useSignInWithTwitter } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const SocialIcons = () => {

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [signInWithTwitter, tuser, tloading, terror] = useSignInWithTwitter(auth);



    return (
        <div>
              <div class="flex flex-col w-full border-opacity-50">
                    <div class="divider">OR</div>
                    <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
                        <div class="flex flex-wrap justify-center gap-2">
                            <button class="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <svg
                                    class="w-6 h-6 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                    />
                                </svg>
                            </button>

                            <button onClick={()=> signInWithTwitter()} class="bg-blue-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <svg
                                    class="w-6 h-6  fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                    />
                                </svg>
                            </button>

                            <button onClick={() => signInWithGoogle()} class="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="w-6 h-6" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z" fill="currentColor"/>
                            </svg>
                            </button>


                        </div>
                    </div>
                </div>
        </div>
    );
};

export default SocialIcons;