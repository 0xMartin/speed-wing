// Inicializace globálních proměnných
let currentLanguage = 'cs';
let map;

// Po načtení dokumentu
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM načten, inicializuji...");
    
    // Inicializovat jazyk z localStorage nebo nastavit výchozí
    initializeLanguage();
    
    // FAQ Accordion
    initFaqAccordion();
    
    // Smooth scrolling pro navigaci
    initSmoothScrolling();
    
    // Inicializovat mapu
    initMap();
    
    // Přidat posluchače událostí pro přepínání jazyka
    document.getElementById('lang-cs').addEventListener('click', function() {
        console.log('Kliknuto na CZ');
        switchLanguage('cs');
    });
    
    document.getElementById('lang-en').addEventListener('click', function() {
        console.log('Kliknuto na EN');
        switchLanguage('en');
    });
});

// Funkce pro inicializaci jazyka
function initializeLanguage() {
    // Zkontrolovat, jestli je uložena preference jazyka
    const savedLanguage = localStorage.getItem('speedwing-language');
    if (savedLanguage) {
        switchLanguage(savedLanguage, false); // false = nechceme ukládat při inicializaci
    } else {
        // Pokud není nastaveno, použít výchozí jazyk (češtinu)
        applyLanguage('cs');
    }
}

// Přepnutí jazyka
function switchLanguage(lang, save = true) {
    console.log(`Přepínání jazyka na: ${lang}`);    
    // Pokud je stejný jazyk jako současný, nic neděláme
    if (lang === currentLanguage) {
        console.log('Stejný jazyk, nepřepínám');
        return;
    }
    
    // Aktualizovat aktivní stav tlačítek
    document.getElementById('lang-cs').classList.toggle('active', lang === 'cs');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    
    // Aplikovat překlady
    applyLanguage(lang);
    
    // Nastavit aktuální jazyk
    currentLanguage = lang;
    
    // Nastavit atribut lang na HTML element
    document.documentElement.setAttribute('lang', lang);
    
    // Uložit preferenci do localStorage
    if (save) {
        localStorage.setItem('speedwing-language', lang);
    }
    
    console.log(`Jazyk byl přepnut na: ${lang}`);
}

// Aplikovat překlady na stránku
function applyLanguage(lang) {
    console.log("Aplikuji překlady pro jazyk:", lang);
    // Nastavit titulek dokumentu
    document.title = translations[lang].docTitle;
    
    // OPRAVENO: Přímé mapování tříd na klíče v translations
    // Navigace
    updateElementContent('.nav-services', translations[lang].navServices);
    updateElementContent('.nav-about', translations[lang].navAbout);
    updateElementContent('.nav-pricing', translations[lang].navPricing);
    updateElementContent('.nav-contact', translations[lang].navContact);
    
    // Hero sekce
    updateElementContent('.hero-title', translations[lang].heroTitle);
    updateElementContent('.hero-text', translations[lang].heroText);
    updateElementContent('.hero-btn', translations[lang].heroBtn);
    
    // Služby
    updateElementContent('.services-title', translations[lang].servicesTitle);
    updateElementContent('.service-title-1', translations[lang].serviceTitle1);
    updateElementContent('.service-text-1', translations[lang].serviceText1);
    updateElementContent('.service-title-2', translations[lang].serviceTitle2);
    updateElementContent('.service-text-2', translations[lang].serviceText2);
    updateElementContent('.service-title-3', translations[lang].serviceTitle3);
    updateElementContent('.service-text-3', translations[lang].serviceText3);
    updateElementContent('.service-title-4', translations[lang].serviceTitle4);
    updateElementContent('.service-text-4', translations[lang].serviceText4);
    
    // O nás
    updateElementContent('.about-title', translations[lang].aboutTitle);
    updateElementContent('.about-heading', translations[lang].aboutHeading);
    updateElementContent('.about-text-1', translations[lang].aboutText1);
    updateElementContent('.about-text-2', translations[lang].aboutText2);
    updateElementContent('.feature-1', translations[lang].feature1);
    updateElementContent('.feature-2', translations[lang].feature2);
    updateElementContent('.feature-3', translations[lang].feature3);
    updateElementContent('.feature-4', translations[lang].feature4);
    
    // Tým
    updateElementContent('.team-title', translations[lang].teamTitle);
    updateElementContent('.team-role-1', translations[lang].teamRole1);
    updateElementContent('.team-desc-1', translations[lang].teamDesc1);
    updateElementContent('.team-role-2', translations[lang].teamRole2);
    updateElementContent('.team-desc-2', translations[lang].teamDesc2);
    updateElementContent('.team-role-3', translations[lang].teamRole3);
    updateElementContent('.team-desc-3', translations[lang].teamDesc3);
    updateElementContent('.team-role-4', translations[lang].teamRole4);
    updateElementContent('.team-desc-4', translations[lang].teamDesc4);
    
    // Testimonials
    updateElementContent('.testimonials-title', translations[lang].testimonialsTitle);
    updateElementContent('.testimonial-text-1', translations[lang].testimonialText1);
    updateElementContent('.testimonial-name-1', translations[lang].testimonialName1);
    updateElementContent('.testimonial-position-1', translations[lang].testimonialPosition1);
    updateElementContent('.testimonial-text-2', translations[lang].testimonialText2);
    updateElementContent('.testimonial-name-2', translations[lang].testimonialName2);
    updateElementContent('.testimonial-position-2', translations[lang].testimonialPosition2);
    updateElementContent('.testimonial-text-3', translations[lang].testimonialText3);
    updateElementContent('.testimonial-name-3', translations[lang].testimonialName3);
    updateElementContent('.testimonial-position-3', translations[lang].testimonialPosition3);
    
    // Mapa
    updateElementContent('.map-title', translations[lang].mapTitle);
    updateElementContent('.delivery-locations-text', translations[lang].deliveryLocationsText);
    
    // Ceník
    updateElementContent('.pricing-title', translations[lang].pricingTitle);
    updateElementContent('.pricing-plan-1', translations[lang].pricingPlan1);
    updateElementContent('.pricing-amount-1', translations[lang].pricingAmount1);
    updateElementContent('.pricing-period-1', translations[lang].pricingPeriod1);
    updateElementContent('.pricing-feature-1-1', translations[lang].pricingFeature1_1);
    updateElementContent('.pricing-feature-1-2', translations[lang].pricingFeature1_2);
    updateElementContent('.pricing-feature-1-3', translations[lang].pricingFeature1_3);
    updateElementContent('.pricing-feature-1-4', translations[lang].pricingFeature1_4);
    updateElementContent('.pricing-feature-1-5', translations[lang].pricingFeature1_5);
    updateElementContent('.pricing-btn-1', translations[lang].pricingBtn1);
    
    updateElementContent('.pricing-plan-2', translations[lang].pricingPlan2);
    updateElementContent('.pricing-amount-2', translations[lang].pricingAmount2);
    updateElementContent('.pricing-period-2', translations[lang].pricingPeriod2);
    updateElementContent('.pricing-feature-2-1', translations[lang].pricingFeature2_1);
    updateElementContent('.pricing-feature-2-2', translations[lang].pricingFeature2_2);
    updateElementContent('.pricing-feature-2-3', translations[lang].pricingFeature2_3);
    updateElementContent('.pricing-feature-2-4', translations[lang].pricingFeature2_4);
    updateElementContent('.pricing-feature-2-5', translations[lang].pricingFeature2_5);
    updateElementContent('.pricing-btn-2', translations[lang].pricingBtn2);
    
    updateElementContent('.pricing-plan-3', translations[lang].pricingPlan3);
    updateElementContent('.pricing-amount-3', translations[lang].pricingAmount3);
    updateElementContent('.pricing-period-3', translations[lang].pricingPeriod3);
    updateElementContent('.pricing-feature-3-1', translations[lang].pricingFeature3_1);
    updateElementContent('.pricing-feature-3-2', translations[lang].pricingFeature3_2);
    updateElementContent('.pricing-feature-3-3', translations[lang].pricingFeature3_3);
    updateElementContent('.pricing-feature-3-4', translations[lang].pricingFeature3_4);
    updateElementContent('.pricing-feature-3-5', translations[lang].pricingFeature3_5);
    updateElementContent('.pricing-btn-3', translations[lang].pricingBtn3);
    
    updateElementContent('.pricing-plan-4', translations[lang].pricingPlan4);
    updateElementContent('.pricing-amount-4', translations[lang].pricingAmount4);
    updateElementContent('.pricing-period-4', translations[lang].pricingPeriod4);
    updateElementContent('.pricing-feature-4-1', translations[lang].pricingFeature4_1, true);
    updateElementContent('.pricing-feature-4-2', translations[lang].pricingFeature4_2);
    updateElementContent('.pricing-feature-4-3', translations[lang].pricingFeature4_3);
    updateElementContent('.pricing-feature-4-4', translations[lang].pricingFeature4_4);
    updateElementContent('.pricing-feature-4-5', translations[lang].pricingFeature4_5);
    updateElementContent('.pricing-btn-4', translations[lang].pricingBtn4);
    updateElementContent('.ribbon-text', translations[lang].ribbonText);
    
    // FAQ
    updateElementContent('.faq-title', translations[lang].faqTitle);
    updateElementContent('.faq-question-1', translations[lang].faqQuestion1);
    updateElementContent('.faq-answer-1', translations[lang].faqAnswer1);
    updateElementContent('.faq-question-2', translations[lang].faqQuestion2);
    updateElementContent('.faq-answer-2', translations[lang].faqAnswer2);
    updateElementContent('.faq-question-3', translations[lang].faqQuestion3);
    updateElementContent('.faq-answer-3', translations[lang].faqAnswer3);
    updateElementContent('.faq-question-4', translations[lang].faqQuestion4);
    updateElementContent('.faq-answer-4', translations[lang].faqAnswer4);
    updateElementContent('.faq-question-5', translations[lang].faqQuestion5);
    updateElementContent('.faq-answer-5', translations[lang].faqAnswer5);
    updateElementContent('.faq-question-6', translations[lang].faqQuestion6);
    updateElementContent('.faq-answer-6', translations[lang].faqAnswer6);
    
    // Kontakt
    updateElementContent('.contact-title', translations[lang].contactTitle);
    updateElementContent('.contact-info-title', translations[lang].contactInfoTitle);
    updateElementContent('.contact-address-label', translations[lang].contactAddressLabel);
    updateElementContent('.contact-address', translations[lang].contactAddress);
    updateElementContent('.contact-phone-label', translations[lang].contactPhoneLabel);
    updateElementContent('.contact-phone', translations[lang].contactPhone);
    updateElementContent('.contact-email-label', translations[lang].contactEmailLabel);
    updateElementContent('.contact-hours-label', translations[lang].contactHoursLabel);
    updateElementContent('.contact-hours-weekdays', translations[lang].contactHoursWeekdays);
    updateElementContent('.contact-hours-weekend', translations[lang].contactHoursWeekend);
    updateElementContent('.contact-form-title', translations[lang].contactFormTitle);
    updateElementContent('.form-label-name', translations[lang].formLabelName);
    updateElementContent('.form-label-email', translations[lang].formLabelEmail);
    updateElementContent('.form-label-subject', translations[lang].formLabelSubject);
    updateElementContent('.form-label-message', translations[lang].formLabelMessage);
    updateElementContent('.form-submit', translations[lang].formSubmit);
    
    // Footer
    updateElementContent('.footer-description', translations[lang].footerDescription);
    updateElementContent('.footer-services-title', translations[lang].footerServicesTitle);
    updateElementContent('.footer-service-1', translations[lang].footerService1);
    updateElementContent('.footer-service-2', translations[lang].footerService2);
    updateElementContent('.footer-service-3', translations[lang].footerService3);
    updateElementContent('.footer-service-4', translations[lang].footerService4);
    updateElementContent('.footer-service-5', translations[lang].footerService5);
    updateElementContent('.footer-links-title', translations[lang].footerLinksTitle);
    updateElementContent('.footer-link-1', translations[lang].footerLink1);
    updateElementContent('.footer-link-2', translations[lang].footerLink2);
    updateElementContent('.footer-link-3', translations[lang].footerLink3);
    updateElementContent('.footer-link-4', translations[lang].footerLink4);
    updateElementContent('.footer-newsletter-title', translations[lang].footerNewsletterTitle);
    updateElementContent('.footer-newsletter-text', translations[lang].footerNewsletterText);
    updateElementContent('.newsletter-submit', translations[lang].newsletterSubmit);
    updateElementContent('.footer-copyright', translations[lang].footerCopyright);
    
    // Aktualizace placeholderů ve formulářích
    const emailPlaceholders = document.querySelectorAll('input[type="email"]');
    if (emailPlaceholders.length > 0) {
        const emailPlaceholder = lang === 'cs' ? 'Váš email' : 'Your email';
        emailPlaceholders.forEach(input => {
            input.placeholder = emailPlaceholder;
        });
    }
    
    // Obnovit mapu po změně jazyka
    if (map) {
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    }
}

// Pomocná funkce pro aktualizaci obsahu elementu
function updateElementContent(selector, content, isHTML = false) {
    const elements = document.querySelectorAll(selector);
    if (elements && elements.length > 0) {
        elements.forEach(element => {
            if (isHTML || content.includes('<')) {
                element.innerHTML = content;
            } else {
                element.textContent = content;
            }
        });
    }
}

// FAQ Accordion funkce
function initFaqAccordion() {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('active');
        });
    });
}

// Funkce pro plynulé scrollování
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 90,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Inicializace mapy
function initMap() {
    // Zkontrolovat, zda existuje element pro mapu
    const mapElement = document.getElementById('delivery-map');
    if (!mapElement) {
        console.error('Element mapy nenalezen!');
        return;
    }
    
    try {
        console.log('Inicializuji mapu...');
        // Inicializovat mapu
        map = L.map('delivery-map').setView([49.8, 15.5], 7); // CZ střed
        
        // Přidat vrstvy mapy
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 11,
            minZoom: 6,
            attribution: ''
        }).addTo(map);
        
        // Hlavní města a kruhy
        const cities = [
            { name: "Praha", lat: 50.0755, lon: 14.4378, color: "#ff6b35", radius: 70000 },
            { name: "Brno", lat: 49.1951, lon: 16.6068, color: "#3a5798", radius: 70000 },
            { name: "Ostrava", lat: 49.8209, lon: 18.2625, color: "#3a5798", radius: 70000 },
            { name: "Plzeň", lat: 49.7475, lon: 13.3776, color: "#3a5798", radius: 70000 },
            { name: "Ústí n.L.", lat: 50.6607, lon: 14.0323, color: "#3a5798", radius: 70000 },
            { name: "Liberec", lat: 50.7671, lon: 15.0562, color: "#3a5798", radius: 70000 },
            { name: "Hradec Kr.", lat: 50.2092, lon: 15.8328, color: "#3a5798", radius: 70000 },
            { name: "Pardubice", lat: 50.0343, lon: 15.7812, color: "#3a5798", radius: 70000 },
            { name: "Jihlava", lat: 49.3961, lon: 15.5912, color: "#3a5798", radius: 70000 },
            { name: "Olomouc", lat: 49.5938, lon: 17.2509, color: "#3a5798", radius: 70000 },
            { name: "Zlín", lat: 49.2264, lon: 17.6706, color: "#3a5798", radius: 70000 },
            { name: "Karlovy V.", lat: 50.2317, lon: 12.8710, color: "#3a5798", radius: 70000 },
            { name: "Č. Buděj.", lat: 48.9747, lon: 14.4744, color: "#3a5798", radius: 70000 },
        ];
        
        // Přidat města na mapu
        cities.forEach(function(city) {
            L.circle([city.lat, city.lon], {
                color: city.color,
                opacity: 0.3,
                fillColor: city.color + "33",
                fillOpacity: 0.9,
                radius: city.radius
            }).addTo(map);
            
            L.circleMarker([city.lat, city.lon], {
                color: "#fff",
                fillColor: city.color,
                fillOpacity: 1,
                radius: 10,
                weight: 3
            }).bindTooltip(city.name, {permanent: true, direction: "top", className: "city-label"}).addTo(map);
        });
        
        // Vyřešit problém s nesprávným vykreslením mapy - aktualizovat rozměry po renderování
        setTimeout(function() {
            console.log('Aktualizuji velikost mapy po inicializaci');
            map.invalidateSize();
        }, 200);
        
        console.log('Mapa byla úspěšně inicializována');
    } catch (error) {
        console.error('Chyba při inicializaci mapy:', error);
    }
}

// Opravit mapu při změně velikosti okna
window.addEventListener('resize', function() {
    if (map) {
        map.invalidateSize();
    }
});

// Pokud se přepneme na stránku z jiné záložky (browser tab), obnovit mapu
window.addEventListener('focus', function() {
    if (map) {
        map.invalidateSize();
    }
});

// Přidat posluchač události pro záložky (tabs) s mapou
document.querySelectorAll('a[data-toggle="tab"]').forEach(tab => {
    tab.addEventListener('shown.bs.tab', function() {
        if (map) {
            map.invalidateSize();
        }
    });
});