                           
                           
                           
                           
                           var button  = document.querySelector('.button')
                            var body = document.querySelector('.body')
                            var bg_color = document.querySelector('.bg-color')

                            var random = ['0','1','2','3','4','5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
                            var empArr = [] ; 
                            var empstr = '' ;
                            button.addEventListener('click', ()=>{
                                    for(var i=0 ; i<=5 ; i++){
                                    empArr.push(Math.floor(Math.random() * (16 -0) + 0))
                                    }
                                    for(var i=0; i<=5 ; i++){
                                        empstr += random[empArr[i]]               
                                    }
                                    
                                    body.style.backgroundColor = '#' + empstr ;
                                    bg_color.innerHTML = '#'+empstr
                                    empArr = []
                                    empstr = ''
                            } )