import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/pdfjs-express';
import './App.css';

const App = () => {
  const viewer = useRef(null);

  // if using a class, equivalent of componentDidMount 
  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/7.1.2',
        initialDoc: '/files/MAWB8CopiesF.pdf',
      },
      viewer.current,
    ).then((instance) => {
      const { docViewer, Annotations, FitMode } = instance;
      const annotManager = docViewer.getAnnotationManager();

      const setInitialStyles = () => {
        const customStyles = widget => {
          if (widget instanceof Annotations.TextWidgetAnnotation) {
            return {
              "background-color": "lightblue",
              color: "black",
            };
          }
        };
        const customContainerStyles = widget => {
          if (widget instanceof Annotations.WidgetAnnotation) {
            return {
              border: "2px solid green",
            };
          }
        };
        Annotations.WidgetAnnotation.getCustomStyles = customStyles;
        Annotations.WidgetAnnotation.getContainerCustomStyles = customContainerStyles;
      };

      const fillForm = data => {
        docViewer.getAnnotationsLoadedPromise().then(() => {
          const fieldManager = annotManager.getFieldManager();
          fieldManager.forEachField(field => {
            field.setValue(data[field.name] || "");
          });
        });
      };

      instance.setFitMode(FitMode.FitWidth);

      docViewer.on('documentLoaded', () => {
        // Add custom styles for form fields
        setInitialStyles();

        // Fill initial data for the form
        fillForm({
          'PickupCompany': 'Demo Company',
          'PickupStreet': 'Demo Street',
          'ShipperAddressLine3': 'Demo City, Demo State, Demo zip'
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <div className="header">React sample</div>
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
};

export default App;
