import type { ReactElement } from 'react';

/**
 * Configurar WHATSAPP_NUMBER en .env.local con el número internacional,
 * sin +, espacios ni guiones. Ejemplo de formato argentino: 54911XXXXXXXX.
 */
export default function FloatingWhatsApp(): ReactElement {
	const rawNumber: string = process.env.WHATSAPP_NUMBER ?? '';
	const phoneNumber: string = rawNumber.replace(/\D/g, '');
	const isValidNumber: boolean = /^\d{8,15}$/.test(phoneNumber);
	const message: string = 'Hola, quisiera consultar por los servicios de INTEC.';
	const whatsAppUrl: string | null = isValidNumber
		? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
		: null;

	return (
		<a
			className="floating-whatsapp"
			href={whatsAppUrl ?? '#contacto'}
			target={whatsAppUrl ? '_blank' : undefined}
			rel={whatsAppUrl ? 'noopener noreferrer' : undefined}
			aria-label={
				whatsAppUrl
					? 'Contactar a INTEC por WhatsApp (se abre en una pestaña nueva)'
					: 'Ir a la sección de contacto de INTEC'
			}
			title={whatsAppUrl ? 'Escribinos por WhatsApp' : 'Contacto INTEC'}>
			<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="currentColor">
				<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.15-.174.198-.298.298-.496.099-.198.05-.372-.025-.52-.074-.15-.67-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.48s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.71.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.57-.085 1.758-.718 2.006-1.412.248-.694.248-1.29.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.844 9.844 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.833 9.833 0 0 1-1.51-5.26c.002-5.45 4.437-9.884 9.886-9.884a9.82 9.82 0 0 1 6.99 2.896 9.82 9.82 0 0 1 2.894 6.991c-.002 5.45-4.437 9.886-9.886 9.886m8.404-18.29A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.334.157 11.89a11.8 11.8 0 0 0 1.587 5.934L.057 24l6.32-1.657a11.87 11.87 0 0 0 5.67 1.444h.005c6.554 0 11.89-5.334 11.892-11.89a11.81 11.81 0 0 0-3.49-8.402z" />
			</svg>
		</a>
	);
}
