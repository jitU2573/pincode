                  document.addEventListener("DOMContentLoaded", function () {
                        const button = document.getElementById("check-pincode");
                        const input = document.getElementById("pincode-input");
                        const status = document.getElementById("pincode-status");
                      
                        const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbwt43WNVEGY1CWEMfMb8D3c3GLo9mFUsgGpHjMeVad2S8lMgxMkFk6ZaLBvZFiastOFaw/exec?pincode=";
                      
                        button.addEventListener("click", async () => {
                          const pincode = input.value.trim();
                      
                          if (!/^\d{6}$/.test(pincode)) {
                            status.textContent = "Please enter a valid 6-digit pincode.";
                            status.style.color = "red";
                            return;
                          }
                      
                          status.textContent = "Checking...";
                          status.style.color = "gray";
                      
                          try {
                            const response = await fetch(API_ENDPOINT + pincode);
                            const data = await response.json();
                      
                            if (data.valid) {
                              status.textContent = "Delivery Available";
                              status.style.color = "green";
                            } else {
                              status.textContent = "Delivery Not Available";
                              status.style.color = "red";
                            }
                          } catch (error) {
                            console.error(error);
                            status.textContent = "Error checking availability";
                            status.style.color = "orange";
                          }
                        });
                      });