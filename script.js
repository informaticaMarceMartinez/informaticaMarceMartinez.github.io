function showSection(profileType) {
    const infoSection = document.getElementById('info');
    infoSection.style.display = 'block'; // Muestra la sección de información

    let content = '';

    // Contenido según el tipo de perfil
    if (profileType === 'programming') {
        content = `
<section>
    <h2>Desarrollo de Software y Bases de Datos</h2>
    
    <p>Mi experiencia en desarrollo de software abarca desde el diseño de interfaces hasta la implementación de sistemas backend sólidos y eficientes.
    </p><br><br>
    
    <h3>Frontend</h3>
    <p>En el frontend, utilizo <strong>HTML5</strong>, <strong>CSS3</strong>, y <strong>JavaScript</strong> para crear interfaces accesibles y responsivas, siempre buscando que el usuario final tenga una experiencia fluida y agradable. Manejo <strong>React</strong> y <strong>Angular</strong> para construir aplicaciones modernas que cumplen con las mejores prácticas de accesibilidad y rendimiento.</p><br>
    
    <h3>Backend</h3>
    <p>En cuanto al backend, tengo sólidos conocimientos en <strong>Java</strong>, <strong>Python</strong>, <strong>PHP</strong>, <strong>C#</strong>, y <strong>JSP</strong>, lo que me permite desarrollar aplicaciones robustas y escalables. He trabajado con <strong>APIs RESTful</strong> y tengo experiencia en <strong>GraphQL</strong> y <strong>SOAP</strong>, integrando servicios backend que permiten que los sistemas interactúen de manera fluida. La seguridad en el desarrollo es una prioridad para mí; implemento <strong>OAuth</strong>, <strong>JWT</strong>, y medidas preventivas contra <strong>SQL Injection</strong>, <strong>XSS</strong> y <strong>CSRF</strong>.</p><br>
    
    <h3>Bases de Datos</h3>
    <p>Además, tengo un enfoque avanzado en Bases de Datos, manejando sistemas como <strong>IBM DB2</strong>, <strong>Oracle</strong>, <strong>MySQL</strong>, <strong>PostgreSQL</strong>, y <strong>MS SQL Server</strong>. Me especializo en optimización de consultas, diseño de índices, y normalización, asegurando que los datos se gestionen de manera eficiente y rápida. También soy competente en scripting con <strong>Bash</strong> y <strong>PowerShell</strong>, lo que me permite automatizar tareas y mantener el sistema en óptimas condiciones.</p><br>
    
    <h3>Análisis y Diseño de Software</h3>
    <p>En cuanto al análisis y diseño de software, soy metódico en la planificación de proyectos, aplicando técnicas como <strong>Scrum</strong> y <strong>XP</strong> y utilizando <strong>UML</strong> para el diseño estructural de sistemas.</p><br>
</section>

<section style="text-align: center; margin-top: 15px;">
                   <a href="/CV_MarceloMartinez_638044140.pdf" download="CV_MarceloMartinez" style="text-decoration: none; color: black;">
                  <button style="padding: 15px 20px; background-color: #4CAF50; color: black; font-size: 1.3em; border: none; border-radius: 5px; cursor: pointer;"><strong>Descarga Mi CV en PDF</strong></button></a>
          </section>

        `;
    } else if (profileType === 'hardware') {
        content = `
            <section>
    <h2>Arquitecto de Hardware y Sistemas Virtualizados</h2>

    <p>Además del desarrollo de software, tengo una amplia experiencia en la arquitectura de infraestructura IT, abarcando desde servidores hasta soluciones de virtualización y almacenamiento.</p><br>

    <h3>Servidores</h3>
    <p>En el área de servidores físicos y virtuales, tengo conocimientos prácticos en la administración de <strong>IBM Systems X</strong>, <strong>IBM BladeCenter</strong>, <strong>IBM Power Systems</strong>, <strong>HPE ProLiant</strong>, y <strong>Dell PowerEdge</strong>. También tengo experiencia en orquestación de contenedores con <strong>Kubernetes</strong> y virtualización en <strong>VMware</strong> y <strong>Hyper-V</strong>.</p><br>

    <h3>Sistemas de Almacenamiento</h3>
    <p>En sistemas de almacenamiento, sé cómo gestionar soluciones <strong>NAS</strong>, <strong>SAN</strong>, y <strong>DAS</strong>, así como entornos de alta velocidad en <strong>Full Flash</strong> y configuraciones avanzadas de <strong>RAID</strong> (0,1,5,10, etc),  para maximizar rendimiento y seguridad. Además, en almacenamiento hiperconvergente como <strong>Nutanix</strong> y <strong>VMware vSAN</strong>, para optimizar infraestructuras IT, logrando más eficiencia y escalabilidad.</p><br>

    <h3>Gestión de Backup y Recuperación de Datos</h3>
    <p>Con respecto a la gestión de backup y recuperación de datos, he trabajado en soluciones como <strong>IBM Spectrum Scale</strong>, <strong>Veeam Backup</strong>, y <strong>Commvault</strong>, así como en sistemas de backup en cintas <strong>LTO</strong>, garantizando durabilidad y retención de datos críticos. La recuperación ante desastres es también una de mis prioridades en la planificación de IT.</p><br>

    <h3>Seguridad en el Almacenamiento</h3>
    <p>La seguridad en el almacenamiento es otra área que manejo con experiencia. He implementado soluciones de cifrado y gestionado certificados <strong>SSL</strong> y <strong>PGP</strong>, asegurando la protección de datos y cumpliendo con normativas de seguridad.</p><br>
</section>
<section style="text-align: center; margin-top: 15px;">
                   <a href="/CV_MarceloMartinez_638044140.pdf" download="CV_MarceloMartinez" style="text-decoration: none; color: black;">
                  <button style="padding: 15px 20px; background-color: #4CAF50; color: black; font-size: 1.3em; border: none; border-radius: 5px; cursor: pointer;"><strong>Descarga Mi CV en PDF</strong></button></a>
          </section>
          
        `;
        
    } else if (profileType === 'itadmin') {
        content = `
<section>
    <h2>Gestión de Sistemas, de Redes y Seguridad</h2>

    <p>Mi perfil además incluye una amplia experiencia en administración de sistemas, gestión de redes, desarrollo y mantenimiento de politicas de seguridad.</p><br>

    <h3>Administración de Sistemas</h3>
    <p>He trabajado extensamente con <strong>Linux, VMware</strong> y <strong>Windows Server</strong>, gestionando desde la configuración inicial hasta el mantenimiento regular para asegurar rendimiento y confiabilidad. Con scripts en <strong>Bash</strong> y <strong>PowerShell</strong>, optimizo y automatizo tareas que mejoran la eficiencia operativa.</p><br>

    <h3>Gestión de Redes</h3>
    <p>En el área de gestión de redes, tengo experiencia en configurar <strong>redes LAN</strong> y <strong>Wi-Fi</strong> empresariales, así como en la administración de conexiones <strong>WAN</strong> y <strong>VPN</strong> para brindar acceso seguro y estable entre ubicaciones y usuarios remotos. He trabajado con productos de <strong>Fortinet, Aruba, Lenovo, PaloAlto, A10</strong>, que incluyen no solo firewalls, sino también dispositivos <strong>Wi-Fi</strong>, puntos de control,  <strong>switches, balanceadores de carga y routers</strong>. Esta amplia gama de dispositivos me permite implementar soluciones integrales de seguridad y conectividad en entornos empresariales.</p><br>
    
    <p>Con <strong>firewalls Fortinet</strong>, he diseñado y configurado políticas de seguridad robustas que protegen la infraestructura de amenazas internas y externas. En el ámbito de dispositivos <strong>Wi-Fi</strong>, he desplegado puntos de acceso FortiAP, asegurando una conectividad segura y eficiente, con un enfoque en la experiencia del usuario final y el rendimiento de la red.</p><br>
    
    <p>Además, he trabajado con <strong>FortiManager</strong> y <strong>FortiAnalyzer</strong> para la gestión centralizada de dispositivos y análisis de seguridad, lo que me permite tener una visibilidad completa de la red y tomar decisiones informadas sobre las configuraciones y políticas de seguridad. También he implementado soluciones de segmentación de red con Fortinet para mejorar la seguridad y el rendimiento de las aplicaciones críticas.</p><br>
    
    <p>Asimismo, cuento con experiencia en la aceleración y administración de enlaces WAN utilizando <strong>Exinda</strong>. Este producto me ha permitido optimizar el rendimiento de la red, priorizar el tráfico crítico y asegurar una experiencia de usuario fluida en aplicaciones empresariales. Estoy certificado internacionalmente en el uso de Exinda, lo que respalda mi capacidad para implementar soluciones efectivas que mejoran la eficiencia de la red y reducen la latencia.</p><br>
<hr style="border: 1px solid #000; width: 90%; margin: 10px auto;"><br>
    <h3>Análisis de Requerimientos y Políticas de Seguridad</h3>
    <p>Realizo un análisis exhaustivo de los requerimientos de cada empresa para desarrollar políticas de seguridad personalizadas que se alineen con sus necesidades y objetivos específicos. Este enfoque permite identificar vulnerabilidades y riesgos potenciales, y establecer controles que mitiguen dichos riesgos mientras se optimizan los recursos tecnológicos. Trabajo en colaboración con los equipos de la empresa para asegurar que las políticas de seguridad no solo protejan la infraestructura, sino que también se integren perfectamente en el flujo de trabajo y procesos del negocio.</p><br>

    <h3>Experiencia en Monitoreo y Seguridad</h3>
    <p>He instalado y configurado herramientas de monitoreo y gestión de seguridad como <strong>Nagios</strong>, <strong>Splunk</strong> e <strong>IBM QRadar</strong> en diferentes datacenters y SOCs. Estas soluciones me han permitido establecer un control centralizado sobre la seguridad y el rendimiento de la infraestructura IT, facilitando la detección de anomalías y la respuesta ante incidentes. Mi experiencia incluye la personalización de paneles de control en Splunk y la creación de reglas de correlación de eventos en QRadar, lo que ayuda a los equipos de seguridad a responder rápidamente a posibles amenazas y mantener la integridad de los sistemas.</p><br>
</section>
<section>
    <h3>Documentación y Administración</h3>
    <p>Finalmente, mantengo documentación clara y detallada de todas las configuraciones y procedimientos, lo que asegura continuidad operativa y facilita la administración de sistemas de manera ordenada y profesional. Esta documentación incluye diagramas de red, guías de configuración, y manuales de procedimientos, los cuales son esenciales para la capacitación de nuevos miembros del equipo y para garantizar que las mejores prácticas sean seguidas consistentemente. </p><br>
</section>

<section style="text-align: center; margin-top: 15px;">
                   <a href="/CV_MarceloMartinez_638044140.pdf" download="CV_MarceloMartinez" style="text-decoration: none; color: black;">
                  <button style="padding: 15px 20px; background-color: #4CAF50; color: black; font-size: 1.3em; border: none; border-radius: 5px; cursor: pointer;"><strong>Descarga Mi CV en PDF</strong></button></a>
          </section>

        `;
    } else if (profileType === 'estudios') {
        content = `
        <section>
  <h2>Certificaciones Internacionales</h2>
  <p>A lo largo de mi carrera, he obtenido diferentes certificaciones que respaldan mi experiencia y conocimientos técnicos. Entre ellas se destacan:</p><br>
  <ul>
    <li><strong>VMware Technical Professional</strong> - VMware</li>
    <li><strong>IBM Certified Technical Specialist</strong> - Midrange Storage Support</li>
    <li><strong>Fortinet Network Security Administrator</strong> - FCNSA</li>
    <li><strong>Exinda Certified Network Administrator</strong> - ECNA</li>
    <li><strong>Lenovo Certified Data Center Professional</strong></li>
    <li><strong>IBM Certified Technical Specialist</strong> - Systems X86</li>
    <li><strong>IBM Certified Technical Specialist</strong> - Power Systems</li>
  </ul><br><br>
</section>
<hr style="border: 1px solid #000; width: 90%; margin: 10px auto;"><br>
        <section>
  <h2>Formación Académica Formal</h2>

  <h3>Instituto PauCasals de Barcelona</h3>
  <p>Formación Nivel 3: Desarrollo de Aplicaciones con Tecnologías WEB<br>
  Título obtenido: Desarrollo de Aplicaciones con Tecnologías WEB</p><br>

  <h3>Universitat Autònoma de Barcelona</h3>
  <p>Carrera: Análisis de datos masivos empresariales<br>
  Certificado final obtenido: Big Data, el impacto de los datos masivos</p><br>

  <h3>L’Escola de Formació – Dolors Paul</h3>
  <p>Carrera: Idioma Catalán - Nivel Básico<br>
  Certificado final obtenido: Idioma Catalán Nivel Básico</p><br>

  <h3>Universidad ORT Uruguay</h3>
  <p>Carrera: Técnico en Sistemas Operativos y Redes Informáticas<br>
  Título final obtenido: Administrador de Servidores Linux</p><br>

  <p>Carrera: Analista en Tecnologías de la Información<br>
  Título intermedio obtenido: Programador Visual Orientado a Objetos<br>
  Título final obtenido: Analista Programador</p><br>

  <h3>Instituto Alianza EE.UU</h3>
  <p>Carrera: Idioma Inglés<br>
  Certificado final obtenido: Inglés Nivel Medio e Inglés Técnico</p><br>
</section>
<hr style="border: 1px solid #000; width: 90%; margin: 10px auto;"><br>

<section>
  <h2>Experiencia Laboral</h2>
  
  <h3>Técnico Senior en Soluciones Informáticas</h3>
  <p><strong>Infotech – Gold Partner IBM</strong> - Montevideo, Uruguay // <strong>marzo 2011 – agosto 2020</strong></p>
  <ul>
    <li>Realización de relevamientos en clientes para entender sus necesidades y problemas.</li>
    <li>Dimensionamiento y configuración de soluciones informáticas.</li>
    <li>Despliegue e implementación de infraestructuras IT.</li>
    <li>Coordinación de servicios post-venta y soporte técnico de primer y segundo nivel.</li>
    <li>Administración y actualización de sistemas Linux, VMware y Windows.</li>
    <li>Manejo de hardware avanzado (servidores, storages, networking).</li>
    <li>Soporte a preventa y product management en visitas a clientes y partners.</li>
  </ul><br>

  <h3>Analista Programador y Consultor IT</h3>
  <p><strong>Agencia del Banco de Seguros</strong> – Las Piedras, Uruguay // <strong>setiembre 2000 – agosto 2010</strong></p>
  <ul>
    <li>Programación en lenguajes como C#, Visual Basic, .Net, PHP, y Javascript.</li>
    <li>Gestión de bases de datos (Informix, Oracle, MS SQL, MySQL, PostgreSQL).</li>
    <li>Desarrollo de scripts en bash, sh, power shell y comandos Batch.</li>
    <li>Diseño y ejecución de proyectos de software y hardware en empresas públicas y privadas.</li>
    <li>QA de aplicaciones y sistemas CRM.</li>
  </ul><br>
</section>
<section style="text-align: center; margin-top: 15px;">
                   <a href="/CV_MarceloMartinez_638044140.pdf" download="CV_MarceloMartinez" style="text-decoration: none; color: black;">
                  <button style="padding: 15px 20px; background-color: #4CAF50; color: black; font-size: 1.3em; border: none; border-radius: 5px; cursor: pointer;"><strong>Descarga Mi CV en PDF</strong></button></a>
          </section>
          
        `;
    }

    infoSection.innerHTML = content; // Inserta el contenido en la sección de información
}

