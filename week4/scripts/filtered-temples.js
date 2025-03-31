// Temple data array with 3 additional temples
const temples = [
    {
      templeName: "Kirtland Ohio",
      location: "Kirtland, Ohio, United States",
      dedicated: "1836, March, 27",
      area: 0,
      imageUrl: "https://imgs.search.brave.com/2i2gzANeX6zEDNBcLN3roqojlo9_17xKc90xEEi1xI0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaHVy/Y2hvZmplc3VzY2hy/aXN0dGVtcGxlcy5v/cmcvYXNzZXRzL2lt/Zy90ZW1wbGVzL2tp/cnRsYW5kLXRlbXBs/ZS9raXJ0bGFuZC10/ZW1wbGUtMTI3NS1t/YWluLmpwZw"
    },
    {
      templeName: "Nauvoo Illinois",
      location: "Nauvoo, Illinois, United States",
      dedicated: "1846, May, 1",
      area: 54000,
      imageUrl: "https://imgs.search.brave.com/I8-uPdmMvMk9h0CGWvBZXzdwnkKVYGkZSINIpXaWl6o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaHVy/Y2hvZmplc3VzY2hy/aXN0dGVtcGxlcy5v/cmcvYXNzZXRzL2lt/Zy90ZW1wbGVzL25h/dXZvby1pbGxpbm9p/cy10ZW1wbGUvbmF1/dm9vLWlsbGlub2lz/LXRlbXBsZS01MDU3/Ni1tYWluLmpwZw"
    },
    {
      templeName: "Salt Lake",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 253000,
      imageUrl: "https://imgs.search.brave.com/7sPHY4hm7UV5W6YkKQYUdl8g1nrgI1J5g1g48frqqrE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaHVy/Y2hvZmplc3VzY2hy/aXN0dGVtcGxlcy5v/cmcvYXNzZXRzL2lt/Zy90ZW1wbGVzL3Nh/bHQtbGFrZS10ZW1w/bGUvc2FsdC1sYWtl/LXRlbXBsZS0xNTY2/OS1tYWluLmpwZw"
    },
    {
      templeName: "St. George Utah",
      location: "St. George, Utah, United States",
      dedicated: "1877, April, 6",
      area: 142000,
      imageUrl: "https://imgs.search.brave.com/JL-8Z6XKU6hBPTN9mx4IZ4jh573IFSfUWtnc2H7e9bw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlY2h1cmNobmV3/cy5jb20vcmVzaXpl/ci92Mi9BQzVHNVY3/UTRVSEZHNlo2UU8z/Mk1CN0gzSS5qcGc_/YXV0aD1mNzBmZGUy/NjAzOGJlYTRkMzQ3/YTdiY2RhNjAzN2E5/MWJhYTY4YjdmZTdh/MTY1YzUzOWE2ZmI3/YmZlOTM0OGVlJmZv/Y2FsPTEwMjQsNjgy/JndpZHRoPTgwMCZo/ZWlnaHQ9NTMy"
    },
    {
      templeName: "Logan Utah",
      location: "Logan, Utah, United States",
      dedicated: "1884, May, 17",
      area: 119619,
      imageUrl: "https://imgs.search.brave.com/cYvMRcgxvrgmH_dhGiUVsj-uFFwQPtqO-f0fFScGXLk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZmluZWFydGFt/ZXJpY2EuY29tL2lt/YWdlcy9hcnR3b3Jr/aW1hZ2VzL21lZGl1/bWxhcmdlLzEvbG9n/YW4tdGVtcGxlLTYt/YnJlbnQtYm9ydXAu/anBn"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://imgs.search.brave.com/t_K9TDbrHwTDJjUzn4p0Dbpr8AUfXue_TQsXU06PFIo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hbHR1/c2ZpbmVhcnQuY29t/L2Nkbi9zaG9wL3By/b2R1Y3RzL0xCMDAz/MDQ1N1AxLmpwZz92/PTE2MDQ0NDU4MTgm/d2lkdGg9MTIxNA"
    },
    {
      templeName: "Laie Hawaii",
      location: "Laie, Hawaii, United States",
      dedicated: "1919, November, 27",
      area: 42305,
      imageUrl: "https://imgs.search.brave.com/tYbmPpkBg0yQ3n27UUxsENa5N982HGI6H9iyJAld6k0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaHVy/Y2hvZmplc3VzY2hy/aXN0dGVtcGxlcy5v/cmcvYXNzZXRzL2lt/Zy90ZW1wbGVzL2xh/aWUtaGF3YWlpLXRl/bXBsZS9sYWllLWhh/d2FpaS10ZW1wbGUt/NzM3MC1tYWluLmpw/Zw"
    },
    {
      templeName: "Buenos Aires Argentina",
      location: "Buenos Aires, Argentina",
      dedicated: "1986, January, 17",
      area: 11600,
      imageUrl: "https://imgs.search.brave.com/p2zokTz_ugNVdKpqUGtPWy3ONlxxg6k9YPaKspxgDeM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlY2h1cmNobmV3/cy5jb20vcmVzaXpl/ci92Mi82SVU2UVhD/VjJETjRPWDZWVllS/SzdXWTY0NC5qcGc_/YXV0aD1lYzIxN2Q5/OWMwNDBiZGIxOTQz/ZTk1ZTM2NDA2OWNh/NmQ4YTkxYzJhYWQw/NmUwMTc4YWMwN2E5/M2E2ZTRiM2Y4JmZv/Y2FsPTk5OSwxNzY5/JndpZHRoPTg0MCZo/ZWlnaHQ9NTU1"
    },
    {
      templeName: "Bogotá Colombia",
      location: "Bogotá, Colombia",
      dedicated: "1999, April, 24",
      area: 5300,
      imageUrl: "https://imgs.search.brave.com/mZFXNXmQ-QUroY5vesvpPHlllZYlPhKcI9dY6j7Zt6k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaHVy/Y2hvZmplc3VzY2hy/aXN0dGVtcGxlcy5v/cmcvYXNzZXRzL2lt/Zy90ZW1wbGVzL2Jv/Z290YS1jb2xvbWJp/YS10ZW1wbGUvYm9n/b3RhLWNvbG9tYmlh/LXRlbXBsZS03NzMz/LW1haW4uanBn"
    },
    {
      templeName: "Santiago Chile",
      location: "Santiago, Chile",
      dedicated: "1983, September, 15",
      area: 20900,
      imageUrl: "https://imgs.search.brave.com/fL8yr3axbfgkR-Gaz8i2o35RrG5iwQlI4wNYOwRQoZ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaHVy/Y2hvZmplc3VzY2hy/aXN0dGVtcGxlcy5v/cmcvYXNzZXRzL2lt/Zy90ZW1wbGVzL3Nh/bnRpYWdvLXdlc3Qt/Y2hpbGUtdGVtcGxl/L3NhbnRpYWdvLXdl/c3QtY2hpbGUtdGVt/cGxlLTQ5OTk4LW1h/aW4uanBn"
    },
    {
      templeName: "São Paulo Brazil",
      location: "São Paulo, Brazil",
      dedicated: "1978, October, 30",
      area: 59945,
      imageUrl: "https://imgs.search.brave.com/Sbu05BaFhxsVgCA2x0dBlx_6S4fKlETMtF7CxeeiyiY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlY2h1cmNobmV3/cy5jb20vcmVzaXpl/ci92Mi9LRldOVTNM/NE9XSERIS0Q0S1BG/VkxGRUFKUS5qcGc_/YXV0aD1jZWQwMmI0/ZjBhMDY3NjZmZWNi/NjI5ZWJiMzIzZGI1/MDNmNTE0ZWE2NjUz/MjZmYWZjOGRiODA0/NTM3OWE2NWM3JmZv/Y2FsPTAsMCZ3aWR0/aD04NDAmaGVpZ2h0/PTUyNA"
    },
    {
      templeName: "Guatemala City Guatemala",
      location: "Guatemala City, Guatemala",
      dedicated: "1984, December, 14",
      area: 11650,
      imageUrl: "https://imgs.search.brave.com/_4xYUjBQBayj-wFj6mZjj1b3bJMQDkF4Rq5fPLb_jTU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzZXJldC5jb20v/cmVzaXplci92Mi9D/RE82VllUREJaNExY/NUw0QlBNSks3M0hP/RS5qcGc_YXV0aD0z/OTAwYzhlZWVjZDU2/YzJhODFmYmFiYWQ4/NGE2ZWYyOWZjY2Zm/YzhkNWJiNDkxNTEy/MDg5N2I0ODMxMTM1/ZjIyJmZvY2FsPTEx/MTUsODEwJndpZHRo/PTgwMCZoZWlnaHQ9/NjAw"
    },
    {
      templeName: "Madrid Spain",
      location: "Madrid, Spain",
      dedicated: "1999, March, 19",
      area: 44993,
      imageUrl: "https://imgs.search.brave.com/gFf5AxjYFESIRmJ3IKkssti9ERcvYZJ471TCWW5lR6g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaHVy/Y2hvZmplc3VzY2hy/aXN0dGVtcGxlcy5v/cmcvYXNzZXRzL2lt/Zy90ZW1wbGVzL190/ZW1wLzA1Ni1NYWRy/aWQtU3BhaW4tVGVt/cGxlLmpwZw"
    },
    {
      templeName: "Trujillo Peru",
      location: "Trujillo, Peru",
      dedicated: "2015, June, 21",
      area: 28400,
      imageUrl: "https://imgs.search.brave.com/8lKt7OF1hKZe4k-cMIsxXOsI6I7gojI5pKdj87jb0sM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9ybW9ud2lraS5j/b20vd2lraS9pbWFn/ZXMvNy83Zi9UcnVq/aWxsb19wZXJ1X3Rl/bXBsZS5qcGc"
    },
    {
      templeName: "Córdoba Argentina",
      location: "Córdoba, Argentina",
      dedicated: "2015, May, 17",
      area: 33955,
      imageUrl: "https://imgs.search.brave.com/O2tSdYZcqIZT0fXKIyPPBjQldpNduZ3pY7Ewp7yxXzw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlY2h1cmNobmV3/cy5jb20vcmVzaXpl/ci92Mi9RMlpPQ1NZ/N0ZTSUYyT0taMlBU/WEdSV1hXTS5qcGc_/YXV0aD0wZjczZTNi/Njc0MDQ5NWE5MzU3/YTRmYzM4YTIyMzgw/MGEzY2ExZGYzNmRk/MWM3Y2IyZWVhODAy/ODk0ODFhMzIyJmZv/Y2FsPTAsMCZ3aWR0/aD04NDAmaGVpZ2h0/PTUyNQ"
    },
    {
      templeName: "Caracas Venezuela",
      location: "Caracas, Venezuela",
      dedicated: "2000, August, 20",
      area: 10200,
      imageUrl: "https://imgs.search.brave.com/kPrRSX3AUkYMGu8TU5JE8Q04DLsfHMctEU9IzdyMqVM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaHVy/Y2hvZmplc3VzY2hy/aXN0dGVtcGxlcy5v/cmcvYXNzZXRzL2lt/Zy90ZW1wbGVzL190/ZW1wLzA5Ni1DYXJh/Y2FzLVZlbmV6dWVs/YS1UZW1wbGUuanBn"
    },
    {
      templeName: "Montevideo Uruguay",
      location: "Montevideo, Uruguay",
      dedicated: "2001, March, 18",
      area: 10700,
      imageUrl: "https://imgs.search.brave.com/cI2-LRLLV2VjN6UnIp5XW-WeTqh5Gz_X95jJDgF-580/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaHVy/Y2hvZmplc3VzY2hy/aXN0dGVtcGxlcy5v/cmcvYXNzZXRzL2lt/Zy90ZW1wbGVzL21v/bnRldmlkZW8tdXJ1/Z3VheS10ZW1wbGUv/bW9udGV2aWRlby11/cnVndWF5LXRlbXBs/ZS0xODQ3NC1tYWlu/LmpwZw"
    },
    {
      templeName: "Tegucigalpa Honduras",
      location: "Tegucigalpa, Honduras",
      dedicated: "2013, March, 17",
      area: 28754,
      imageUrl: "https://imgs.search.brave.com/k1tAfWfQSQ5VP_YQCmOfd7qvm2dsqiP2P00p7UWHxI4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9ybW9ud2lraS5j/b20vd2lraS9pbWFn/ZXMvZC9kNi9UZWd1/Y2lnYWxwYV9Ib25k/dXJhc19UZW1wbGUu/anBn"
    },
    // Additional temples
    {
      templeName: "Rome Italy",
      location: "Rome, Italy",
      dedicated: "2019, March, 10",
      area: 40000,
      imageUrl: "https://imgs.search.brave.com/H_f8TABQ0sogxuGQQ8R4ZGYM7W9ajR7HPazr30TRK8A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaHVy/Y2hvZmplc3VzY2hy/aXN0dGVtcGxlcy5v/cmcvYXNzZXRzL2lt/Zy90ZW1wbGVzL3Jv/bWUtaXRhbHktdGVt/cGxlL3JvbWUtaXRh/bHktdGVtcGxlLTI2/NDItbWFpbi5qcGc"
    },
    {
      templeName: "Paris France",
      location: "Paris, France",
      dedicated: "2017, May, 21",
      area: 44000,
      imageUrl: "https://imgs.search.brave.com/N0bh66svdrVy7h3wYZsEJC7RvAPPH2khWfN1o9gLz0s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91Y2Fy/ZWNkbi5jb20vNDk3/ZjJhYjAtYTA5Ni00/YmMyLTg4MTAtM2E2/OGNiNzFlNTFhLy0v/Zm9ybWF0L2F1dG8v/LS9wcmV2aWV3LzMw/MDB4MzAwMC8tL3F1/YWxpdHkvbGlnaHRl/ci9QYXJpcyUyMFRl/bXBsZSUyMC0lMjBB/cnQlMjBHbGFzcyUy/MFdpbmRvd3NfUm9i/ZXJ0JTIwQSUyMEJv/eWRfd2ViLmpwZw"
    },
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    }
  ];
  
  // DOM Elements
  const templeContainer = document.getElementById('temple-container');
  const navLinks = document.querySelectorAll('nav a');
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('nav ul');
  const modeToggle = document.getElementById('mode');
  const mainHeading = document.querySelector('main h1');
  
  // Display temples function
  function displayTemples(filter = 'all') {
      templeContainer.innerHTML = '';
      
      let filteredTemples = [];
      
      switch(filter) {
          case 'old':
              filteredTemples = temples.filter(temple => {
                  const year = parseInt(temple.dedicated.split(',')[0]);
                  return year < 1900;
              });
              mainHeading.textContent = 'Old Temples (Before 1900)';
              break;
          case 'new':
              filteredTemples = temples.filter(temple => {
                  const year = parseInt(temple.dedicated.split(',')[0]);
                  return year > 2000;
              });
              mainHeading.textContent = 'New Temples (After 2000)';
              break;
          case 'large':
              filteredTemples = temples.filter(temple => temple.area > 90000);
              mainHeading.textContent = 'Large Temples (>90,000 sq ft)';
              break;
          case 'small':
              filteredTemples = temples.filter(temple => temple.area < 10000 && temple.area > 0);
              mainHeading.textContent = 'Small Temples (<10,000 sq ft)';
              break;
          default:
              filteredTemples = temples;
              mainHeading.textContent = 'All Temples';
      }
      
      filteredTemples.forEach(temple => {
          const templeCard = document.createElement('div');
          templeCard.className = 'temple-card';
          
          templeCard.innerHTML = `
              <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
              <div class="temple-info">
                  <h2>${temple.templeName}</h2>
                  <p><strong>Location:</strong> ${temple.location}</p>
                  <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                  <p><strong>Area:</strong> ${temple.area > 0 ? temple.area.toLocaleString() + ' sq ft' : 'Unknown'}</p>
              </div>
          `;
          
          templeContainer.appendChild(templeCard);
      });
  }
  
  // Navigation event listeners
  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const filter = link.dataset.filter;
          
          // Update active class
          navLinks.forEach(navLink => navLink.classList.remove('active'));
          link.classList.add('active');
          
          // Display filtered temples
          displayTemples(filter);
          
          // Close mobile menu if open
          navMenu.classList.remove('show');
      });
  });
  
  
  
  // Initial display of all temples
  displayTemples();